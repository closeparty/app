import { NgModule} from '@angular/core';
import { TabsPage} from './tabs.page';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [TabsPage],
    imports: [
        IonicPageModule.forChild(TabsPage),

    ],
})
export class TabsPageModule { }
