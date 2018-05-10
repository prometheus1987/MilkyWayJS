import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { ApodService } from "./apod.service";
import {ObjectMapper} from "json-object-mapper";
import { ApodQueryResponse } from "./apod"
import * as moment from 'moment';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  service: ApodService;
  date: string;
  constructor() {  }

  ngOnInit() {}


  queryApod() {
    this.date = "04/20/2018";
    debugger;
    this.service.queryApod(this.date)
      .subscribe(data =>  {
        let obj = ObjectMapper.deserialize(ApodQueryResponse, data)
        debugger;
      });
  }

}
