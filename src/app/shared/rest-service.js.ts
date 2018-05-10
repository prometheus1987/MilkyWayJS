import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/empty";
import "rxjs/add/operator/catch"

export type RestParameter = {[param: string]: any | any[]};

export abstract class RestService {

  constructor(public http: HttpClient) {

  }

  private request(method: string = "GET", url: string = '', params?: RestParameter, body?:any): any {
    let obs=Observable.empty();
    let request = this.http.request(method, url, {
      body: body,
      // headers: this.headers,
      observe: 'body',
      params: params,
      responseType: 'json'
    })
    .catch(res =>{
      return Observable.throw(res);
    })
  }
  get(url: string = '', params?: RestParameter ): Observable<any> {
    return this.request("GET", url, params);
    debugger;
  }
}
