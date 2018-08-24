import {
  JsonpModule,
  Jsonp,
  BaseRequestOptions,
  Response,
  ResponseOptions,
  Http
} from "@angular/http";
import {TestBed, fakeAsync, tick} from '@angular/core/testing';
import {MockBackend} from "@angular/http/testing";
import {HubbleService} from './shared/hubble.service';

describe('Service: Hubble', () => {

let service: HubbleService;
let backend: MockBackend;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [JsonpModule],
    providers: [
      HubbleService,
      MockBackend,
      BaseRequestOptions,
      {
        provide: Jsonp,
        useFactory: (backend, options) => new Jsonp(backend, options),
        deps: [MockBackend, BaseRequestOptions]
      }
    ]
  });

  backend = TestBed.get(MockBackend);
  service = TestBed.get(HubbleService);
  });

  it('search should return a name and id', fakeAsync(() => {
    service.queryHubbleSummary()
      .subscribe(data =>  {
        this.res = data._body;
    }),
    tick();

    expect(service).toHaveBeenCalled;
    expect(this.res).toBeDefined;
  }));
});