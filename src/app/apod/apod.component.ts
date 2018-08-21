import { Component, OnInit } from '@angular/core';
import { ObjectMapper } from "json-object-mapper";
import { ApodService } from "./shared/apod.service";
import { ApodQueryResponse} from "./shared/apod"
import * as moment from 'moment';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  dateQuery: string;
  title: string;
  url: string;
  explanation: string;
  
  constructor(private service: ApodService) {  }

  ngOnInit() {  }

  queryApod(event) {
    this.dateQuery = moment(event).format("YYYY-MM-DD");
    console.log(event);
    this.service.queryApod(this.dateQuery)
      .subscribe(data =>  {
        let obj = ObjectMapper.deserialize(ApodQueryResponse, data);
        this.title = obj.title;
        this.url = obj.hdurl;
        this.explanation = obj.explanation;
      });
  }
}
