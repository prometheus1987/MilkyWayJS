import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HubbleComponent } from "./hubble.component";
import { HubbleService } from "./shared/hubble.service";
import { HttpClientJsonpModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HubbleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientJsonpModule
  ],
  providers: [HubbleService],
  bootstrap: [HubbleComponent]
})
export class HubbleModule { }
