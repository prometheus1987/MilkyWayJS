import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { HubbleService } from "./shared/hubble.service";

@Component({
  selector: 'app-hubble',
  templateUrl: './hubble.component.html',
  styleUrls: ['./hubble.component.scss']
})
export class HubbleComponent implements OnInit {

  res: string[];
  page: number;
  
  constructor(private service: HubbleService) {  }

  ngOnInit() {}

  searchSummary() {
    this.page = 1;
    this.service.queryHubbleSummary()
      .subscribe(json =>  {
        this.res = json;
        console.log("query hubble summary: ", this.res);
      }),
      (err: HttpErrorResponse) => {
        console.error(err);
      };
  }
}
