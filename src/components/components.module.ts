import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { PreloadImageComponent } from './preload-image/preload-image';
import { WavesButtonEffectDirective } from './waves-buttons/waves-buttons';

export const components = [
    PreloadImageComponent,
    WavesButtonEffectDirective
  ];

@NgModule({
  declarations: [components],
  imports: [IonicModule],
  exports: [components]
})
export class ComponentsModule {}
