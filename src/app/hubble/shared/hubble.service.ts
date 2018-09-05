import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HubbleService {
  constructor(public http: HttpClient) {}

  queryHubbleSummary(page: number): Observable<any> {
    const url = `http://hubblesite.org/api/v3/images/all?page=${page}?callback=application/javascript`;
    return this.http.jsonp(url, 'callback')
  }

  queryImagesById(id: string): Observable<any> {
    const url = `http://hubblesite.org/api/v3/image/${id}?callback=application/javascript`;
    return this.http.jsonp(url, 'callback');
  }
}
