import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyDGSnwVbEHLoJOqpIdnnWhejh58GPLEQwY",
  authDomain: "angularauth-f0d4c.firebaseapp.com",
  databaseURL: "https://angularauth-f0d4c.firebaseio.com",
  storageBucket: "angularauth-f0d4c.appspot.com",
  messagingSenderId: "931853890353"
}

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
