import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
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

  readonly cameras = [
    "All",
    "FHAZ",
    "RHAZ",
    "MAST",
    "NAVCAM",
    "CHEMCAM",
    "MAHLI",
    "MARDI",
    "MINITES"
  ];
  
  date: Date = new Date();
  dateQuery: string;
  camera: string = "All";
  rover: string = "Curiosity";
  page: number = 1;

  res: string[];
  photos: string[];
  totalPhotos: string;
  landingDate: string;
  launchDate: string;
  name: string[];

  noData: boolean = false;

  ngOnInit() {}
  
  onSearch(){
    this.dateQuery = moment(this.date).format("YYYY-MM-DD");
    this.service.queryRover(this.rover, this.dateQuery, this.camera, this.page)
      .subscribe(data =>  {
        this.noData = false;
        this.res = data.photos;
        console.log("rover query: ", this.res);
        this.photos = this.mapRoverPhotos(this.res);
        this.totalPhotos = data.photos[0].rover.total_photos;
        this.landingDate = data.photos[0].rover.landing_date;
        this.launchDate = data.photos[0].rover.launch_date;
      }),
      (err: HttpErrorResponse) => {
        console.error(err);
        this.noData = true;
      };
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
