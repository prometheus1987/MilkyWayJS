import { Component } from '@angular/core';
import { RoverService } from './shared/rovers.service';
import * as _ from "lodash";
import { ObjectMapper } from "json-object-mapper";
import * as moment from 'moment';

@Component({
  selector: 'app-rovers',
  templateUrl: './rovers.component.html',
  styleUrls: ['./rovers.component.scss']
})
export class RoversComponent {
  
  constructor(private service: RoverService) {  }

  readonly rovers = ['Curiosity', 'Opportunity', 'Spirit'];

  
  date: Date = new Date();
  dateQuery: string;
  camera: string = "";
  rover: string = "Curiosity";
  res: string[];
  photos: string[];
  totalPhotos: string;
  landingDate: string;
  launchDate: string;
  name: string[];

  ngOnInit() {}
  
  onSearch(){
 
    this.dateQuery = moment(this.date).format("YYYY-MM-DD");
    this.service.queryRover(this.rover, this.dateQuery, this.camera)
      .subscribe(data =>  {
        this.res = data.photos;
        console.log("rover query: ", data);
        this.photos = this.mapRoverPhotos(this.rovers);
        this.totalPhotos = data.photos[0].rover.total_photos;
        this.landingDate = data.photos[0].rover.landing_date;
        this.launchDate = data.photos[0].rover.launch_date;
      });
    }

    mapRoverPhotos(rover) {
      return _.map(this.res, function(photo){
          return {
            name: photo.camera.full_name,
            abbreviation: photo.camera.name,
            img: photo.img_src
          }
      });
  }
}
