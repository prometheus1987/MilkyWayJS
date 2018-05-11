import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ObjectMapper} from "json-object-mapper";
import { SearchService } from "./shared/search.service";
import { SearchQueryResponse} from "./shared/search";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchQuery: string;

  constructor(public http: HttpClient,
              private service: SearchService) { }

  ngOnInit() {}

  onSearch(){
    this.service.search(this.searchQuery)
      .subscribe(data =>  {
        let obj = ObjectMapper.deserialize(SearchQueryResponse, data);
        debugger;
      });
  }
}
