import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApodComponent } from "./apod.component";
import { ApodService } from "./shared/apod.service";


@NgModule({
  declarations: [
    ApodComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [ApodService],
  bootstrap: [ApodComponent]
})
export class ApodModule { }
