import { JsonProperty } from "json-object-mapper";

export class HubbleSummary {
 @JsonProperty({name: 'id'})
 id: number;
 @JsonProperty({name: 'name'})
 name: string;

 constructor(){
  this.id = undefined;
  this.name = undefined;
 }
}

export class HubbleSummaryResponse {
  @JsonProperty({type: HubbleSummary, name: 'hubble'})
  obj: HubbleSummary

  constructor() {
    this.obj = undefined;
  }
}
