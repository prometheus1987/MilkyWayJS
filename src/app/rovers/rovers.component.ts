import { Component } from '@angular/core';
import { RoverService } from './shared/rovers.service';

@Component({
  selector: 'app-rovers',
  templateUrl: './rovers.component.html',
  styleUrls: ['./rovers.component.scss']
})
export class RoversComponent {
  
  constructor(private service: RoverService) {  }

  ngOnInit() {}
  

}
