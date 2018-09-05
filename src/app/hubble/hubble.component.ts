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
    this.service.queryHubbleSummary(this.page)
      .subscribe(json =>  {
        this.res = json;
        console.log("page", this.page, this.res);
      }),
      (err: HttpErrorResponse) => {
        console.error(err);
      };
  }

  onPageChanged(event: any): void {
    console.log('event page: ' + event.page);
    if (event.page != this.page + 1) {
      this.page = event.page - 1;
      this.searchSummary();
    }
  }
}
