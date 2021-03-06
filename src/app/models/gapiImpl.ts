// Type definitions for non-npm package Google Sign-In API 0.0
// Project: https://developers.google.com/identity/sign-in/web/
// Definitions by: Derek Lawless <https://github.com/flawless2011>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="gapi" />

/**
 * GoogleAuth is a singleton export interface Ithat provides methods to allow the user to sign in with a Google account,
 * get the user's current sign-in status, get specific data from the user's Google profile,
 * request additional scopes, and sign out from the current account.
 */
export interface IGoogleAuth {
    isSignedIn: IIsSignedIn;

    currentUser: ICurrentUser;

    /**
     * Calls the onInit function when the GoogleAuth object is fully initialized, or calls the onFailure function if
     * initialization fails.
     */
    then(onInit: (googleAuth: IGoogleAuth) => any, onFailure?: (reason: { error: string, details: string }) => any): any;

    /**
     * Signs in the user using the specified options.
     * If no option specified here, fallback to the options specified to gapi.auth2.init().
     */
    signIn(options?: ISigninOptions | ISigninOptionsBuilder): Promise<IGoogleUser>;

    /**
     * Signs out all accounts from the application.
     */
    signOut(): any;

    /**
     * Revokes all of the scopes that the user granted.
     */
    disconnect(): any;

    /**
     * Get permission from the user to access the specified scopes offline.
     */
    grantOfflineAccess(options?: IOfflineAccessOptions): Promise<{ code: string }>;

    /**
     * Attaches the sign-in flow to the specified container's click handler.
     */
    attachClickHandler(container: any, options: ISigninOptions,
                       onsuccess: (googleUser: IGoogleUser) => any, onfailure: (reason: string) => any): any;
}

export interface IIsSignedIn {
    /**
     * Returns whether the current user is currently signed in.
     */
    get(): boolean;

    /**
     * Listen for changes in the current user's sign-in state.
     */
    listen(listener: (signedIn: boolean) => any): void;
}

export interface ICurrentUser {
    /**
     * Returns a GoogleUser object that represents the current user. Note that in a newly-initialized
     * GoogleAuth instance, the current user has not been set. Use the currentUser.listen() method or the
     * GoogleAuth.then() to get an initialized GoogleAuth instance.
     */
    get(): IGoogleUser;

    /**
     * Listen for changes in currentUser.
     */
    listen(listener: (user: IGoogleUser) => any): void;
}

export interface ISigninOptions {
    /**
     * The package name of the Android app to install over the air.
     * See Android app installs from your web site:
     * https://developers.google.com/identity/sign-in/web/android-app-installs
     */
    app_package_name?: string;
    /**
     *    Fetch users' basic profile information when they sign in.
     *    Adds 'profile', 'email' and 'openid' to the requested scopes.
     *    True if unspecified.
     */
    fetch_basic_profile?: boolean;
    /**
     * Specifies whether to prompt the user for re-authentication.
     * See OpenID Connect Request Parameters:
     * https://openid.net/specs/openid-connect-basic-1_0.html#RequestParameters
     */
    prompt?: string;
    /**
     * The scopes to request, as a space-delimited string.
     * Optional if fetch_basic_profile is not set to false.
     */
    scope?: string;
    /**
     * The UX mode to use for the sign-in flow.
     * By default, it will open the consent flow in a popup.
     */
    ux_mode?: 'popup' | 'redirect';
    /**
     * If using ux_mode='redirect', this parameter allows you to override the default redirect_uri
     * that will be used at the end of the consent flow.
     * The default redirect_uri is the current URL stripped of query parameters and hash fragment.
     */
    redirect_uri?: string;
}

/**
 * Definitions by: John <https://github.com/jhcao23>
 * export interface Ithat represents the different configuration parameters for the GoogleAuth.grantOfflineAccess(options) method.
 * Reference: https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2offlineaccessoptions
 */
export interface IOfflineAccessOptions {
    scope?: string;
    prompt?: 'select_account' | 'consent';
    app_package_name?: string;
}

// noinspection JSUnusedGlobalSymbols
/**
 * export interface Ithat represents the different configuration parameters for the gapi.auth2.init method.
 * Reference: https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2clientconfig
 */
export interface IClientConfig {
    /**
     * The app's client ID, found and created in the Google Developers Console.
     */
    client_id?: string;

    /**
     * The domains for which to create sign-in cookies. Either a URI, single_host_origin, or none.
     * Defaults to single_host_origin if unspecified.
     */
    cookie_policy?: string;

    /**
     * The scopes to request, as a space-delimited string. Optional if fetch_basic_profile is not set to false.
     */
    scope?: string;

    /**
     * Fetch users' basic profile information when they sign in. Adds 'profile' and 'email' to the requested scopes. True if unspecified.
     */
    fetch_basic_profile?: boolean;

    /**
     * The Google Apps domain to which users must belong to sign in. This is susceptible to modification by clients,
     * so be sure to verify the hosted domain property of the returned user. Use GoogleUser.getHostedDomain() on the client,
     * and the hd claim in the ID Token on the server to verify the domain is what you expected.
     */
    hosted_domain?: string;

    /**
     * Used only for OpenID 2.0 client migration. Set to the value of the realm that you are currently using for OpenID 2.0,
     * as described in <a href="https://developers.google.com/accounts/docs/OpenID#openid-connect">OpenID 2.0 (Migration)</a>.
     */
    openid_realm?: string;

    /**
     * The UX mode to use for the sign-in flow.
     * By default, it will open the consent flow in a popup.
     */
    ux_mode?: 'popup' | 'redirect';

    /**
     * If using ux_mode='redirect', this parameter allows you to override the default redirect_uri
     * that will be used at the end of the consent flow.
     * The default redirect_uri is the current URL stripped of query parameters and hash fragment.
     */
    redirect_uri?: string;
}

export interface ISigninOptionsBuilder {
    setAppPackageName(name: string): any;

    setFetchBasicProfile(fetch: boolean): any;

    setPrompt(prompt: string): any;

    setScope(scope: string): any;
}

export interface IBasicProfile {
    getId(): string;

    getName(): string;

    getGivenName(): string;

    getFamilyName(): string;

    getImageUrl(): string;

    getEmail(): string;
}

/**
 * Reference: https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2authresponse
 */
export interface IAuthResponse {
    access_token: string;
    id_token: string;
    login_hint: string;
    scope: string;
    expires_in: number;
    first_issued_at: number;
    expires_at: number;
}

// noinspection JSUnusedGlobalSymbols
/**
 * Reference: https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2authorizeconfig
 */
export interface IAuthorizeConfig {
    client_id: string;
    scope: string;
    response_type?: string;
    prompt?: string;
    cookie_policy?: string;
    hosted_domain?: string;
    login_hint?: string;
    app_package_name?: string;
    openid_realm?: string;
    include_granted_scopes?: boolean;
}

// noinspection JSUnusedGlobalSymbols
/**
 * Reference: https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2authorizeresponse
 */
export interface IAuthorizeResponse {
    access_token: string;
    id_token: string;
    code: string;
    scope: string;
    expires_in: number;
    first_issued_at: number;
    expires_at: number;
    error: string;
    error_subtype: string;
}

/**
 * A GoogleUser object represents one user account.
 */
export interface IGoogleUser {
    /**
     * Get the user's unique ID string.
     */
    getId(): string;

    /**
     * Returns true if the user is signed in.
     */
    isSignedIn(): boolean;

    /**
     * Get the user's Google Apps domain if the user signed in with a Google Apps account.
     */
    getHostedDomain(): string;

    /**
     * Get the scopes that the user granted as a space-delimited string.
     */
    getGrantedScopes(): string;

    /**
     * Get the user's basic profile information.
     */
    getBasicProfile(): IBasicProfile;

    /**
     * Get the response object from the user's auth session.
     */
    getAuthResponse(includeAuthorizationData?: boolean): IAuthResponse;

    /**
     * Forces a refresh of the access token, and then returns a Promise for the new AuthResponse.
     */
    reloadAuthResponse(): Promise<IAuthResponse>;

    /**
     * Returns true if the user granted the specified scopes.
     */
    hasGrantedScopes(scopes: string): boolean;

    /**
     * Signs in the user. Use this method to request additional scopes for incremental
     * authorization or to sign in a user after the user has signed out.
     * When you use GoogleUser.signIn(), the sign-in flow skips the account chooser step.
     * See GoogleAuth.signIn().
     */
    signIn(options?: ISigninOptions | ISigninOptionsBuilder): any;

    /**
     * See GoogleUser.signIn()
     */
    grant(options?: ISigninOptions | ISigninOptionsBuilder): any;

    /**
     * Get permission from the user to access the specified scopes offline.
     * When you use GoogleUser.grantOfflineAccess(), the sign-in flow skips the account chooser step.
     * See GoogleUser.grantOfflineAccess().
     */
    grantOfflineAccess(scopes: string): void;

    /**
     * Revokes all of the scopes that the user granted.
     */
    disconnect(): void;
}
