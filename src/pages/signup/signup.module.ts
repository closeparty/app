import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SignupPage } from './signup';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../app/shared.module';

@NgModule({
    declarations: [SignupPage],
    imports: [
        SharedModule,
        IonicPageModule.forChild(SignupPage)
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SignupPageModule { }