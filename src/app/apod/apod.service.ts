import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/observable";


@Injectable()
export class ApodService {

  constructor(private http: HttpClient) {

  }

  queryApod(date: string): Observable<any> {
    const url = "https://api.nasa.gov/planetary/apod?date" + date + "&api_key=NeHYhGtJMXT1kJ9jSP8bnRF2t1IpYShALfGkSKoz";
    return this.http.get(url);
  }
}
