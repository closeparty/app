/**
 * Created by Recapix on 2017/07/11
 */
import { NgModule } from '@angular/core';
import { PrivacyPolicyPage } from './privacy-policy';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [PrivacyPolicyPage],
    imports: [
        IonicPageModule.forChild(PrivacyPolicyPage)
    ],
})
export class PrivacyPolicyPageModule { }