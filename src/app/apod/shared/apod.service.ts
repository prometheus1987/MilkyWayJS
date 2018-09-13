import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AppConfigService } from "../../shared/app-config.service";


@Injectable()
export class ApodService {

  constructor(public http: HttpClient,
    private configService: AppConfigService) {
    this.configService.getConfig().subscribe(cfg => {
      this.key = cfg.key;
      this.url = cfg.url;
    })
  }

  key: string;
  url: string;

  queryApod(dateQuery: string): Observable<any> {
    const url = `${this.url}/planetary/apod?date=${dateQuery}&api_key=${this.key}`;
    return this.http.get(url);
  }
}
