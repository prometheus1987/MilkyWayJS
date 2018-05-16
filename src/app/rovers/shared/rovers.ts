import { JsonProperty } from "json-object-mapper";

export class RoverQueryFilter {
  @JsonProperty({name: 'rover'})
  rover: string;
  @JsonProperty({name: 'date'})
  date: string;

  constructor() {
    this.rover = undefined;
    this.date = undefined;
  }
}