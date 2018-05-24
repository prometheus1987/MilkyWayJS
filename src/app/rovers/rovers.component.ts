import { Component } from '@angular/core';
import { RoverService } from './shared/rovers.service';
import { RoverQueryFilter } from './shared/rovers';
import * as _ from "lodash";

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
  rovers: string[];
  photos: string[];
  totalPhotos: string;
  landingDate: string;
  launchDate: string;

  ngOnInit() {}
  
  onSearch(){
    this.service.queryRover(this.rover, this.date)
      .subscribe(data =>  {
        this.rovers = data.photos;
        this.photos = this.mapRoverPhotos(this.rovers);
        this.totalPhotos = data.photos[0].rover.total_photos;
        this.landingDate = data.photos[0].rover.landing_date;
        this.launchDate = data.photos[0].rover.launch_date;
      });
    }

    mapRoverPhotos(data) {
      return _.map(data, function(photo){
          return {
            name: photo.camera.full_name,
            abbreviation: photo.camera.name,
            img: photo.img_src
          }
      });
  }
}
