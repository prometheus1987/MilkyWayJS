import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RoverService } from './shared/rovers.service';
import { AppConfigService } from '../shared/app-config.service';

describe('RoversService', () => {
  
  let app: AppConfigService
  let service: RoverService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        RoverService,
        AppConfigService
      ]
    });

    service = TestBed.get(RoverService);
    http = TestBed.get(HttpTestingController);
    app = TestBed.get(AppConfigService);
  })

  it('should successfully return manifest data', () => {
    let rover = "Curiosity";
    service.queryManifest(rover)
      .subscribe(res => {
        expect(res).toEqual(
          [
            {
              "photo_manifest": {}
            }
          ]
        )
      })

    let appRequest = http.expectOne('./assets/config/config.json');
    let manifestRequest = http.expectOne("https://mars-photos.herokuapp.com/mars-photos/api/v1/manifest/" + rover);
    http.verify();
  })
})