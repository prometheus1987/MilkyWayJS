import { Component } from '@angular/core';
import { RoverService } from './shared/rovers.service';
import { RoverQueryFilter } from './shared/rovers';

@Component({
  selector: 'app-rovers',
  templateUrl: './rovers.component.html',
  styleUrls: ['./rovers.component.scss']
})
export class RoversComponent {
  
  constructor(private service: RoverService) {  }

  filter: RoverQueryFilter;
  date: string;
  rover: string;

  ngOnInit() {}
  
  onSearch(){
    this.filter.date = this.date;
    this.filter.rover = this.rover;
    this.service.queryRover(this.filter)
      .subscribe(data =>  {
        let rovers = data;
      });
  }
}
