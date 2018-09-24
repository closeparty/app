import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import {IonicPage} from "ionic-angular";

@IonicPage({  
  name: 'page-privacy-policy'
})
@Component({
  selector: 'privacy-policy-page',
  templateUrl: 'privacy-policy.html'
})

export class PrivacyPolicyPage {

  constructor(public view: ViewController) {}

  dismiss() {
    this.view.dismiss();
  }
}
