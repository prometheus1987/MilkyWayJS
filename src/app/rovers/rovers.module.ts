import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoversComponent } from './rovers.component';


@NgModule({
  declarations: [
    RoversComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [RoversComponent]
})
export class RoversModule { }
