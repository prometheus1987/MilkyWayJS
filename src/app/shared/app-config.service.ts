import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class AppConfigService {

  constructor(private http: HttpClient) {
  }

  public getConfig(): Observable<any> {
    return this.http.get('./assets/config/config.json');
  }
}
