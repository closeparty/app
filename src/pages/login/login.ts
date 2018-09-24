import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IonicPage } from "ionic-angular";
import { AngularFireAuth } from '@angular/fire/auth';
import { UserProfileProvider } from '../../providers/user-profile/user-profile';

@IonicPage({
  name: 'page-login'
})
@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
})
export class LoginPage {
  public login: FormGroup;
  loading: any;

  constructor(public nav: NavController, public afAuth: AngularFireAuth, public UserProfile: UserProfileProvider, public loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.initForm();
  }

  ionViewDidLoad() { }

  doLogin() {
    let env = this;
    this.loading = this.loadingCtrl.create();
    var formvalues = this.login.value;
    this.afAuth
      .auth
      .signInWithEmailAndPassword(formvalues.email, formvalues.password)
      .then(value => {
        this.UserProfile
          .get(value.user.uid)
          .subscribe(ob => {
            debugger;
            // if (ob.name === '' && ob.surname === '') {
            //   env.loading.dismiss();
            //   env.nav.push('page-account-profile', ob);
            // } else {
            //   env.nav.setRoot('page-tabs');
            // }
          });
      })
      .catch(error => {
        console.log(error);
      });
  }

  doFacebookLogin() { }

  initForm() {
    this.login = new FormGroup({
      email: new FormControl('', Validators.email),
      password: new FormControl('', Validators.required)
    });
  }

  goToSignup() { }

  goToForgotPassword() { }
}
