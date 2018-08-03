import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/observable";

@Injectable()
export class RoverService {

  constructor(public http: HttpClient) {}

  queryManifest(rover: string): Observable<any> {
    const url = `https://api.nasa.gov/mars-photos/api/v1/manifest/${rover}`;
    return this.http.get(url);
  }

  queryRover(rover: string, date: string, camera: string): Observable<any> {
    if(camera) {
      const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${date}&camera=${camera}&api_key=NeHYhGtJMXT1kJ9jSP8bnRF2t1IpYShALfGkSKoz`;  
      return this.http.get(url);
    } else {
      const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${date}&api_key=NeHYhGtJMXT1kJ9jSP8bnRF2t1IpYShALfGkSKoz`;
      return this.http.get(url);
    }
  }
}
