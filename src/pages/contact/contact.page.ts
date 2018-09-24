import { Component } from '@angular/core';

import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
  name: 'page-contact'
})
@Component({
  selector: 'ib-page-contact',
  templateUrl: 'contact.page.html',
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

}
