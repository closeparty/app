import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { SharedModule } from './shared.module';
import { MODULES, PROVIDERS } from './app.imports';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    MODULES,
    IonicModule.forRoot(MyApp, {
      preloadModules: true
    }),
    SharedModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    PROVIDERS,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
