import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { HomeComponent } from './home/home.component';

import { RoversModule } from './rovers/rovers.module'
import { ApodModule } from './apod/apod.module';
import { SearchModule } from './search/search.module';
import { OrbitalModule } from './orbital/orbital.module';
import { HubbleModule } from './hubble/hubble.module';
import { SpaceXModule } from './spacex/spacex.module';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    RoversModule,
    ApodModule,
    SearchModule,
    OrbitalModule,
    HubbleModule,
    SpaceXModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
