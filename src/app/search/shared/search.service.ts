import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/observable";
import { RestService } from "../../shared/rest-service.js";

@Injectable()
export class SearchService extends RestService{

  constructor(public http:HttpClient) {
    super(http);
  }

  queryImages(searchQuery: string): Observable<any> {
    const url = "https://images-api.nasa.gov/search?q=" + searchQuery;
    return this.http.get(url);
  }
}
