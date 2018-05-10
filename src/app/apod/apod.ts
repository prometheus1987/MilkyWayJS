import { JsonProperty } from "json-object-mapper";

export interface Apod {

}

export class ApodQueryFilter {
  @JsonProperty({name: 'date'})
  event: string;

  constructor() {
    this.event = undefined;
  }
}

export class ApodQueryResponse {
  
}
