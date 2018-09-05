import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OrbitalComponent } from './orbital.component';
import { OrbitalService } from "./shared/orbital.service";
import { FormsModule } from '@angular/forms';
import { AppConfigService } from '../shared/app-config.service'


@NgModule({
  declarations: [
    OrbitalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AppConfigService, OrbitalService],
  bootstrap: [OrbitalComponent]
})
export class OrbitalModule { }
