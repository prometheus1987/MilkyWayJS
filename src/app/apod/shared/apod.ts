import { JsonProperty } from "json-object-mapper";

export class ApodQueryResponse {
 @JsonProperty({name: 'date'})
  date: string;
 @JsonProperty({name: 'explanation'})
  explanation: string;
 @JsonProperty({name: 'hdurl'})
  hdurl: string;
  @JsonProperty({name: 'url'})
  url: string;
 @JsonProperty({name: 'media_type'})
  type: string;
 @JsonProperty({name: 'title'})
  title: string;

 constructor(){
   this.date = undefined;
   this.explanation = undefined;
   this.hdurl = undefined;
   this.url = undefined;
   this.type = undefined;
   this.title = undefined;
 }
}
