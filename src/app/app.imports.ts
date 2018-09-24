import { BrowserModule } from "@angular/platform-browser";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { environmentConfig } from "./app.environment";
import { HttpModule } from "@angular/http";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { FirebaseProvider } from "../providers/firebase/firebase";
import { UserProfileProvider } from "../providers/user-profile/user-profile";

export const MODULES: any[] = [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(environmentConfig.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
];

export const PROVIDERS: any[] = [
    StatusBar,
    SplashScreen,
    FirebaseProvider,
    UserProfileProvider
];

export const DIRECTIVES: any[] = [];

