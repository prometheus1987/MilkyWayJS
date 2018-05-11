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

  dateQuery: string;
  constructor(private service: ApodService) {  }

  ngOnInit() {}


  queryApod(event) {
    this.dateQuery = "2018-05-01";
    debugger;
    this.service.queryApod(this.dateQuery)
      .subscribe(data =>  {
        let obj = ObjectMapper.deserialize(ApodQueryResponse, data);
        debugger;
      });
  }

}
