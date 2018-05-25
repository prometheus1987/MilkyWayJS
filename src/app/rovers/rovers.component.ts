import { Component } from '@angular/core';
import { RoverService } from './shared/rovers.service';
import * as _ from "lodash";
import * as moment from 'moment';

@Component({
  selector: 'app-rovers',
  templateUrl: './rovers.component.html',
  styleUrls: ['./rovers.component.scss']
})
export class RoversComponent {
  
  constructor(private service: RoverService) {  }

  readonly rovers = ['Curiosity', 'Opportunity', 'Spirit'];

  
  date: string;
  dateQuery: string;
  rover: string;
  results: string[];
  photos: string[];
  totalPhotos: string;
  landingDate: string;
  launchDate: string;
  name: string[];

  ngOnInit() {}
  
  onSearch(){
    this.dateQuery = moment(this.date).format("YYYY-MM-DD");
    this.service.queryRover(this.rover, this.dateQuery)
      .subscribe(data =>  {
        debugger;
        this.results = data.photos;
        // this.photos = this.mapRoverPhotos(this.rovers);
        this.totalPhotos = data.photos[0].rover.total_photos;
        this.landingDate = data.photos[0].rover.landing_date;
        this.launchDate = data.photos[0].rover.launch_date;
        for(let i=0;i<this.results.length; i++){
          this.name = this.results;
          debugger;
        }
      });
    }

    // mapRoverPhotos(data) {
    //   return _.map(data, function(photo){
    //       return {
    //         // name: photo.camera.full_name,
    //         abbreviation: photo.camera.name,
    //         img: photo.img_src
    //       }
    //   });
  }
}
