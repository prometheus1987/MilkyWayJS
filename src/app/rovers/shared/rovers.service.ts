import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AppConfigService } from "../../shared/app-config.service";

@Injectable()
export class RoverService {

  constructor(public http: HttpClient,
              private configService: AppConfigService) {
    this.configService.getConfig().subscribe(cfg => {
      this.key = cfg.key;
      this.url = cfg.nasa;
    })
  }

  key: string;
  url: string;

  queryManifest(rover: string): Observable<any> {
    const url = `https://mars-photos.herokuapp.com/mars-photos/api/v1/manifest/${rover}`;
    return this.http.get(url);
  }

  queryRover(rover: string, date: string, camera: string, page: number): Observable<any> {
    if(camera == "All") {
      const url = `${this.url}/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${date}&page=${page}&api_key=${this.key}`;  
      return this.http.get(url);
    } else {
      const url = `${this.url}/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${date}&camera=${camera}&${page}&api_key=${this.key}`;
      return this.http.get(url);
    }
  }
}
