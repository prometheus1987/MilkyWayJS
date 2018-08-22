import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/observable";


@Injectable()
export class SpaceXService {

  constructor(public http:HttpClient) {}
}
