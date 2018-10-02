import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { environment } from '../environments/environment';

// importaciones firebase
import { AngularFireModule } from '@angular/fire';
import { HereMapComponent } from './here-map/here-map.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HereMapComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
