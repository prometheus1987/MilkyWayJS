import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AppConfigService } from "../../shared/app-config.service";


@Injectable()
export class OrbitalService {

  constructor(public http: HttpClient,
    private configService: AppConfigService) {
    this.configService.getConfig().subscribe(cfg => {
      this.key = cfg.key;
      this.url = cfg.nasa;
    })
  }

  key: string;
  url: string;

  queryOrbitalData(startDate: string, endDate: string): Observable<any> {
    const url = `${this.url}/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${this.key}`;
    return this.http.get(url);
  }
}
