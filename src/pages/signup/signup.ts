import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IonicPage } from "ionic-angular";

@IonicPage({  
  name: 'page-signup'
})
@Component({
  selector: 'signup-page',
  templateUrl: 'signup.html'
})
export class SignupPage {
  signup: FormGroup;
  loading: any;

  constructor(
    public nav: NavController,
    public modal: ModalController,
    public loadingCtrl: LoadingController,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signup = this.fb.group({
      'email': '',
      'password': '',
      'confirm_password': ''
    });
  }

  ionViewDidLoad() {

  }

  doSignup() {
   
  }

  doFacebookSignup() {

  }

  doGoogleSignup() {

  }

  showTermsModal() {
    let modal = this.modal.create('page-terms-of-service');
    modal.present();
  }

  showPrivacyModal() {
    let modal = this.modal.create('page-privacy-policy');
    modal.present();
  }
}
