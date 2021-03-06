import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { GoogleLoginService } from 'src/app/services/GoogleLoginService/google-login.service';

import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
    let component: LoginPageComponent;
    let fixture: ComponentFixture<LoginPageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
                   declarations: [ LoginPageComponent ],
                   providers: [ GoogleLoginService ],
                   imports: [
                       BrowserAnimationsModule,
                       CommonModule,
                       MatStepperModule,
                       MatFormFieldModule,
                       MatInputModule,
                       MatButtonModule,
                       MatDatepickerModule,
                       MatNativeDateModule,
                       MatSelectModule,
                       MatIconModule,
                       MatListModule,
                       FormsModule,
                       ReactiveFormsModule,
                       MatSnackBarModule,
                       HttpClientTestingModule,
                       DeviceDetectorModule.forRoot(),
                       RouterTestingModule
                   ]
               })
               .compileComponents();


        fixture = TestBed.createComponent(LoginPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    afterAll(() => {
        TestBed.resetTestingModule();
    });
});
