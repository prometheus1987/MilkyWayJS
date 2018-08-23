import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HubbleComponent } from "./hubble.component";
import { HubbleService } from "./shared/hubble.service";
import { Jsonp } from '@angular/http';

@NgModule({
  declarations: [
    HubbleComponent
  ],
  imports: [
    BrowserModule,
    BsDatepickerModule.forRoot(),
    Jsonp
  ],
  providers: [HubbleService],
  bootstrap: [HubbleComponent]
})
export class HubbleModule { }
