import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoginPage } from './login';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../app/shared.module';

@NgModule({
    declarations: [LoginPage],
    imports: [
        SharedModule,
        IonicPageModule.forChild(LoginPage)
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginPageModule { }