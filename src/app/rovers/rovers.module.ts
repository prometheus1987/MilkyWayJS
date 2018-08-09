import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { RoversComponent } from './rovers.component';
import { RoverService} from "./shared/rovers.service";
import { FormsModule } from '@angular/forms';
import { AppConfigService } from '../shared/app-config.service'


@NgModule({
  declarations: [
    RoversComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [AppConfigService, RoverService],
  bootstrap: [RoversComponent]
})
export class RoversModule { }
