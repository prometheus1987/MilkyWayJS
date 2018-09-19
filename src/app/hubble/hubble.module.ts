import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HubbleComponent } from "./hubble.component";
import { HubbleService } from "./shared/hubble.service";
import { HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HubbleComponent
  ],
  imports: [
    BrowserModule,    
    FormsModule,
    HttpClientJsonpModule
  ],
  providers: [HubbleService],
  bootstrap: [HubbleComponent]
})
export class HubbleModule { }
