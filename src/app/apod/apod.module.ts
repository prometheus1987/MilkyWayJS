import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ApodComponent } from "./apod.component";


@NgModule({
  declarations: [
    ApodComponent
  ],
  imports: [
    BrowserModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [ApodComponent]
})
export class ApodModule { }
