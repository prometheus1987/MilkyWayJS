import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
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
    FormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [AppConfigService, OrbitalService],
  bootstrap: [OrbitalComponent]
})
export class OrbitalModule { }
