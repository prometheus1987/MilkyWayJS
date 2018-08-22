import { Component, OnInit } from '@angular/core';
import { SpaceXService } from "./shared/spacex.service";

@Component({
  selector: 'app-spacex',
  templateUrl: './spacex.component.html',
  styleUrls: ['./spacex.component.css']
})
export class SpaceXComponent implements OnInit {

  constructor(private service: SpaceXService) { }

  ngOnInit() {}
  
}
