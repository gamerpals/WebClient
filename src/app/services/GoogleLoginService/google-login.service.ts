import { Injectable } from '@angular/core';
import { GamerPalsHelperMethodService } from '../GamerPalsHelperMethodService/gamer-pals-helper-method.service';
import { PlatformInfoService } from '../PlatformInfoService/platform-info.service';
import { IGoogleAuth, IIsSignedIn, IGoogleUser, ISigninOptions } from 'src/app/models/gapiImpl';
declare var gapi: any;
@Injectable({
  providedIn: 'root'
})
export class GoogleLoginService {
  private static clientId = '533079699939-156l7gmrnfnqhbrsjpm5n6gjcvccp147.apps.googleusercontent.com';
  public static googleAuth: IGoogleAuth;

  constructor(private gpHelperMethods: GamerPalsHelperMethodService,
              private platformInfo: PlatformInfoService) { }

  public async initGoogleLogin(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (GoogleLoginService.googleAuth != null) {
        resolve(GoogleLoginService.googleAuth);
      }

      this.gpHelperMethods.callWhenPropertyAvailable('gapi', () => {
        gapi.load('client:auth2', () => {
          gapi.client.init({
            client_id: GoogleLoginService.clientId,
            scope: 'profile email'
          }).then(() => {
            GoogleLoginService.googleAuth = gapi.auth2.getAuthInstance();
            resolve(GoogleLoginService.googleAuth);
          });
        });
      });
    });
  }

  public onSignInAndInitial(callback: (isSignedIn: boolean) => any): void {
    this.isUserSignedIn().then((isSignedIn: boolean) => {
      callback(isSignedIn);
    });

    this.isUserSignedInListener().then((signedInListener: IIsSignedIn) => {
      signedInListener.listen((isSignedIn: boolean) => callback(isSignedIn));
    });
  }

  public async isUserSignedInListener(): Promise<IIsSignedIn> {
    await this.initGoogleLogin();

    return new Promise((resolve, reject) => {
      resolve(GoogleLoginService.googleAuth.isSignedIn);
    });
  }

  public async isUserSignedIn(): Promise<boolean> {
    await this.initGoogleLogin();

    return new Promise<boolean>((resolve, reject) => {
      resolve(GoogleLoginService.googleAuth.isSignedIn.get());
    });
  }

  public async getSignedInUser(): Promise<IGoogleUser> {
    await this.initGoogleLogin();

    return new Promise<IGoogleUser>((resolve, reject) => {
      const user: IGoogleUser = GoogleLoginService.googleAuth.currentUser.get();
      if (user == null) { reject(); }

      resolve(user);
    });
  }

  public async signInUser(mode?: string, redirectUri?: string): Promise<any> {
    await this.initGoogleLogin();

    const m = mode || 'popup';

    const options: ISigninOptions = {};
    options.scope = 'profile email';
    options.prompt = 'select_account';
    if (m === 'popup') {
      options.ux_mode = 'popup';
    } else {
      options.ux_mode = 'redirect';
    }

    if (options.ux_mode === 'redirect' && redirectUri != null) {
      options.redirect_uri = redirectUri;
    }

    if (this.platformInfo.isCurrentPlatformElectron()) {
      options.ux_mode = 'redirect';
      return GoogleLoginService.googleAuth.signIn(options);
    } else {
      return GoogleLoginService.googleAuth.signIn(options);
    }
  }

  public async signOutCurrentUser(): Promise<any> {
    await this.initGoogleLogin();

    return GoogleLoginService.googleAuth.signOut();
  }
}
