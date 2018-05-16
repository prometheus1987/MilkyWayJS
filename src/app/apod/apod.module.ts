import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ApodComponent } from "./apod.component";
import { ApodService } from "./apod.service";


@NgModule({
  declarations: [
    ApodComponent
  ],
  imports: [
    BrowserModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [ApodService],
  bootstrap: [ApodComponent]
})
export class ApodModule { }
