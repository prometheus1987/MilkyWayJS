import { Component, OnInit } from '@angular/core';
import { HubbleService } from "./shared/hubble.service";
import { HttpErrorResponse } from '@angular/common/http';

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
      .subscribe(data =>  {
        this.res = data;
        console.log("query hubble summary: ", this.res);
        debugger;
      }),
      (err: HttpErrorResponse) => {
        console.error(err);
      };
  }
}
