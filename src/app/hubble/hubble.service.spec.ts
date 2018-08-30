import {TestBed, fakeAsync, tick} from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {MockBackend} from "@angular/http/testing";
import {HubbleService} from './shared/hubble.service';

describe('Service: Hubble', () => {

let service: HubbleService;
let backend: MockBackend;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [
      HubbleService,
      MockBackend
    ]
  });

  backend = TestBed.get(MockBackend);
  service = TestBed.get(HubbleService);
  });

  it('search should return a name and id', fakeAsync(() => {
    let page = 1;

    service.queryHubbleSummary(page)
      .subscribe(data =>  {
        this.res = data._body; 
    }),
    tick();
    
    expect(service.queryHubbleSummary).toBeCalled;
    expect(this.res).toBeDefined;
  }));
});