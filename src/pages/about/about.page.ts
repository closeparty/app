import { Component } from '@angular/core';

import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
  name: 'page-about'
})
@Component({
  selector: 'ib-page-about',
  templateUrl: 'about.page.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

}
