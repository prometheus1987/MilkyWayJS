import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable()
export class SearchService {

  constructor(public http:HttpClient) {}

  search(searchQuery: string): Observable<any> {
    const url = "https://images-api.nasa.gov/search?q=" + searchQuery;
    return this.http.get(url);
  }
}
