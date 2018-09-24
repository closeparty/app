import { NgModule} from '@angular/core';
import { AboutPage} from './about.page';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [AboutPage],
    imports: [
        IonicPageModule.forChild(AboutPage),

    ],
})
export class AboutPageModule { }
