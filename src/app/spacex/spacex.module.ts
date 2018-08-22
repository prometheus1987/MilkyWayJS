import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { SpaceXComponent } from './spacex.component';
import { SpaceXService } from './shared/spacex.service';


@NgModule({
  declarations: [
    SpaceXComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SpaceXService],
  bootstrap: [SpaceXComponent]
})
export class SpaceXModule { }
