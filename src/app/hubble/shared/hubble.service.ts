import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/observable";
import { AppConfigService } from "../../shared/app-config.service";


@Injectable()
export class HubbleService {

  constructor(public http: HttpClient,
    private configService: AppConfigService) {
    this.configService.getConfig().subscribe(cfg => {
      this.key = cfg.key;
      this.url = cfg.url;
    })
  }

  key: string;
  url: string;
}
