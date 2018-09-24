import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage({
    name: 'page-tabs'
})
@Component({
    templateUrl: 'tabs.page.html',
})
export class TabsPage {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    public tab1Root: any = 'page-home';
    public tab2Root: any = 'page-about';
    public tab3Root: any = 'page-contact';

    constructor() { //
    }
}
