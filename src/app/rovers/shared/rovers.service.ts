import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/observable";


@Injectable()
export class RoverService {

  constructor(public http: HttpClient) {}
  
  queryRover(name: any, date: string): Observable<any> {
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${name}/photos?earth_date=${date}&api_key=NeHYhGtJMXT1kJ9jSP8bnRF2t1IpYShALfGkSKoz`;
    return this.http.get(url);
  }
}
