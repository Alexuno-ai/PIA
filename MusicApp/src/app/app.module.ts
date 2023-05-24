import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';
import { AngularFireAnalytics, AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), RouterModule.forRoot([]), AppRoutingModule,ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),AngularFireAuthModule,AngularFireAnalyticsModule,],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy  },AngularFireAnalytics],
  bootstrap: [AppComponent],
})
export class AppModule {}



