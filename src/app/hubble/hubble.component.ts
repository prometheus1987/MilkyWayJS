import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { HubbleService } from "./shared/hubble.service";

@Component({
  selector: 'app-hubble',
  templateUrl: './hubble.component.html',
  styleUrls: ['./hubble.component.scss']
})
export class HubbleComponent implements OnInit {

  items: string[];
  details: string[]; 
  page: number;
  id: number;
  
  constructor(private service: HubbleService) {  }

  ngOnInit() {
    this.searchSummary();
  }

  searchSummary() {
    this.service.queryHubbleSummary(this.page)
      .subscribe(json =>  {
        this.items = json;
        console.log("page", this.page, this.items);
      }),
      (err: HttpErrorResponse) => {
        console.error(err);
      };
  }

  searchById(id) {
    this.service.queryImagesById(id) 
      .subscribe(json => {
        this.details.push(json);
      })
  }
  onPageChanged(event: any): void {
    console.log('event page: ' + event.page);
    if (event.page != this.page + 1) {
      this.page = event.page - 1;
      this.searchSummary();
    }
  }
}
