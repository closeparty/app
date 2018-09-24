import { NgModule} from '@angular/core';
import { ContactPage} from './contact.page';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [ContactPage],
    imports: [
        IonicPageModule.forChild(ContactPage),

    ],
})
export class ContactPageModule { }
