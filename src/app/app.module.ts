import { BakeryDetailPageModule } from './bakery-detail/bakery-detail.module';
import { BakeryService } from './services/bakery.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { AuthModule } from './auth/auth.module';
import { IONIC_COMPONENTS } from './ionic-components';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ...IONIC_COMPONENTS, AppRoutingModule, HttpClientModule, AuthModule, BakeryDetailPageModule],
  providers: [
    provideIonicAngular(),
    StatusBar,
    BakeryService,
    Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
