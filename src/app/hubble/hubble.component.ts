import { Component, OnInit } from '@angular/core';
import { HubbleService } from "./shared/hubble.service";

@Component({
  selector: 'app-hubble',
  templateUrl: './hubble.component.html',
  styleUrls: ['./hubble.component.scss']
})
export class HubbleComponent implements OnInit {

  dateQuery: string;
  title: string;
  url: string;
  explanation: string;
  
  constructor(private service: HubbleService) {  }

  ngOnInit() {  }
}