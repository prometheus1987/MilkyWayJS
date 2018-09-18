import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RoverService } from './shared/rovers.service';
import { AppConfigService } from '../shared/app-config.service';

describe('RoversService', () => {
  
  let app: AppConfigService;
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


  it('should successfully return camera data', () => {
    app.getConfig().subscribe(cfg => {
      expect(cfg.cameras).toEqual(
        {
          "cameras": [
            "All",
            "FHAZ",
            "RHAZ",
            "MAST",
            "NAVCAM",
            "CHEMCAM",
            "MAHLI",
            "MARDI",
            "MINITES"
          ],
        }
      )      
    })
  })
})