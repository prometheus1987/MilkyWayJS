import { Injectable } from "@angular/core";
import {JsonpModule, Jsonp, Response} from '@angular/http';
import { Observable } from "rxjs/observable";
import { AppConfigService } from "../../shared/app-config.service";

@Injectable()
export class HubbleService {
  constructor(public jsonp: Jsonp,
    private configService: AppConfigService) {
    this.configService.getConfig().subscribe(cfg => {
      this.key = cfg.key;
      this.url = cfg.hubble;
    })
  }

  key: string;
  url: string;

  queryHubbleSummary(): Observable<any> {
    const url = `http://hubblesite.org/api/v3/images/all`;
    return this.jsonp.request(url);
  }

  queryImagesById(id: string): Observable<any> {
    const url = `http://hubblesite.org/api/v3/image/${id}`;
    return this.jsonp.request(url);
  }
}
