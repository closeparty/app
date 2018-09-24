/**
 * Created by Recapix on 2017/07/11
 */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WalkthroughPage } from './walkthrough';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../app/shared.module';

@NgModule({
    declarations: [WalkthroughPage],
    imports: [
        SharedModule,
        IonicPageModule.forChild(WalkthroughPage)
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WalkthroughPageModule { }