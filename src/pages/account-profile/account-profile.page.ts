import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';

import {IonicPage} from "ionic-angular";

@IonicPage({  
  name: 'page-account-profile'
})
@Component({
  selector: 'account-profile-page',
  templateUrl: 'account-profile.html'
})
export class AccountProfilePage {
  accountProfile: FormGroup;
  profileImage:string
  constructor(public nav: NavController, public navParams: NavParams) {
    console.log(navParams);
      this.accountProfile = new FormGroup({
        name: new FormControl(navParams.get('name'), Validators.required),
        surname: new FormControl(navParams.get('surname'), Validators.required),
        birthDate: new FormControl(navParams.get('birthDate'), Validators.required),
      });
      this.profileImage = navParams.get('profileImage');
  }

  doContinueRegistration(){

  }

  ionViewDidLoad() {
   
  }
}
