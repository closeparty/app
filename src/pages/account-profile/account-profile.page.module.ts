import { NgModule } from '@angular/core';
import { AccountProfilePage } from './account-profile.page';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../app/shared.module';

@NgModule({
    declarations: [AccountProfilePage],
    imports: [
        SharedModule,
        IonicPageModule.forChild(AccountProfilePage)
    ],
})
export class AccountProfilePageModule { }