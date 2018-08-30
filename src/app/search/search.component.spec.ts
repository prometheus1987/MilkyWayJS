import {TestBed, fakeAsync, tick} from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {MockBackend} from "@angular/http/testing";
import {SearchService} from './shared/search.service';

describe('Service: Search', () => {

let service: SearchService;
let backend: MockBackend;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [
      SearchService,
      MockBackend
    ]
  });

  backend = TestBed.get(MockBackend);
  service = TestBed.get(SearchService);
  });

  it('search should return data', fakeAsync(() => {
    let searchQuery = 'mars';

    service.search(searchQuery)
      .subscribe(data =>  {
        this.res = data; 
    }),
    tick();
    
    expect(searchQuery).toBeDefined;
    expect(service.search).toBeCalled;
    expect(this.res).toBeDefined;
  }));
});