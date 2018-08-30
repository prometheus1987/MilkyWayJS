import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { RoverService } from './shared/rovers.service';
import { AppConfigService } from '../shared/app-config.service';
import { ObjectMapper } from 'json-object-mapper';
import { RoverResponse } from './shared/rover';
import * as _ from "lodash";
import * as moment from 'moment';

@Component({
  selector: 'app-rovers',
  templateUrl: './rovers.component.html',
  styleUrls: ['./rovers.component.scss']
})
export class RoversComponent {
  
  constructor(private service: RoverService,
              private configService: AppConfigService) {
              this.configService.getConfig().subscribe(cfg => {
                this.cameras = cfg.cameras;
                this.rovers = cfg.rovers
              })
  }

  date: Date = new Date();
  dateQuery: string;
  cameras: string[];
  rovers: string[];
  camera: string = "All";
  rover: string = "Curiosity";
  page: number = 1;

  res: RoverResponse;
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
        this.res = ObjectMapper.deserialize(RoverResponse, data);
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

    calculateMaxDate() {
    }

    onPageChanged(event: any): void {
      console.log('event page: ' + event.page);
      if (event.page != this.page + 1) {
        this.page = event.page - 1;
        this.onSearch();
      }
    }
}
