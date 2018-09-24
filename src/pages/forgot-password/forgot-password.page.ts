import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';

import {IonicPage} from "ionic-angular";

@IonicPage({  
  name: 'page-forget-password'
})
@Component({
  selector: 'forgot-password-page',
  templateUrl: 'forgot-password.page.html'
})
export class ForgotPasswordPage {
  forgot_password: FormGroup;

  constructor(public nav: NavController) {
      this.forgot_password = new FormGroup({
        email: new FormControl('', Validators.required)
      });
  }

  recoverPassword(){
   
  }

  ionViewDidLoad() {
   
  }
}
