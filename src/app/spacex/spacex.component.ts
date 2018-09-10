import { Component, OnInit } from '@angular/core';
import { SpaceXService } from "./shared/spacex.service";

@Component({
  selector: 'app-spacex',
  templateUrl: './spacex.component.html',
  styleUrls: ['./spacex.component.scss']
})
export class SpaceXComponent implements OnInit {

  constructor(private service: SpaceXService) { }

  searchQuery: string;
  
  ngOnInit() {}
  
  onSearch() {

  }
}
