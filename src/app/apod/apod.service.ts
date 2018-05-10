import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/observable";
import { RestService } from "../shared/rest-service.js";

@Injectable()
export class ApodService extends RestService{

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  queryApod(date: string): Observable<any> {
    const url = "https://api.nasa.gov/planetary/apod?date" + date + "&api_key=NeHYhGtJMXT1kJ9jSP8bnRF2t1IpYShALfGkSKoz";
    return this.get(url);
  }
}
