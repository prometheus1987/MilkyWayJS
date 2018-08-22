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

  it('should return an error if request failed', (done) => {

  });

  it('should successfully return manifest data', (done) => {
    let rover = "curiosity";
    service.queryManifest(rover)
      .subscribe(res => {
        expect(res).toEqual(
          [
            {
              "photo_manifest": {
                "name": "Curiosity",
                "landing_date": "2012-08-06",
                "launch_date": "2011-11-26",
                "status": "active",
                "max_sol": 2147,
                "max_date": "2018-08-21",
                "total_photos": 340507,
                "photos": []
              }
            }
          ]
        )
      })
  })
})