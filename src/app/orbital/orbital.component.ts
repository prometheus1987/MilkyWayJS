import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import * as _ from "lodash";
import * as moment from 'moment';
import { OrbitalService } from './shared/orbital.service';

@Component({
  selector: 'app-orbital',
  templateUrl: './orbital.component.html',
  styleUrls: ['./orbital.component.css']
})
export class OrbitalComponent implements OnInit {

  constructor(public service: OrbitalService) { }

  ngOnInit() {}

  startDate: string;
  endDate: string;
  dateRange: string[];
  res: string[];

  onSearch(){
    this.startDate = moment(this.dateRange[0]).format("YYYY-MM-DD");
    this.endDate = moment(this.dateRange[1]).format("YYYY-MM-DD");
    
    this.service.queryOrbitalData(this.startDate, this.endDate)
      .subscribe(data =>  {
        this.res = data.near_earth_objects;
        console.log("query orbital data: ", this.res);
      }),
      (err: HttpErrorResponse) => {
        console.error(err);
      };
    }
}
