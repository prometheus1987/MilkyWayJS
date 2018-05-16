import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/observable";


@Injectable()
export class ApodService {

  constructor(public http: HttpClient) {}

  queryApod(dateQuery: string): Observable<any> {
    const url = `https://api.nasa.gov/planetary/apod?date=${dateQuery}&api_key=NeHYhGtJMXT1kJ9jSP8bnRF2t1IpYShALfGkSKoz`;
    return this.http.get(url);
  }
}
