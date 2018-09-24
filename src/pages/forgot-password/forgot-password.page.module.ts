import { NgModule } from '@angular/core';
import { ForgotPasswordPage } from './forgot-password.page';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../app/shared.module';

@NgModule({
    declarations: [ForgotPasswordPage],
    imports: [
        SharedModule,
        IonicPageModule.forChild(ForgotPasswordPage)
    ],
})
export class ForgotPasswordPageModule { }