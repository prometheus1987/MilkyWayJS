import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { RoversComponent } from './rovers.component';
import { RoverService } from './shared/rovers.service';


@NgModule({
  declarations: [
    RoversComponent
  ],
  imports: [
    BrowserModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [RoverService],
  bootstrap: [RoversComponent]
})
export class RoversModule { }
