import { Component, OnInit } from '@angular/core';

// import { ObjectMapper } from "json-object-mapper";
import { SearchService } from "./shared/search.service";
// import { SearchQueryResponse } from "./shared/search";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchQuery: string;
  items: string[];
  data: string[];
  link: string[];

  constructor(private service: SearchService) { }

  ngOnInit() {}

  onSearch(){
    this.service.search(this.searchQuery)
      .subscribe(data =>  {
        this.items = data.collection.items;
        
        for(let i=0;i<this.items.length; i++){
          this.data = data.collection.items[i].data[0];
          this.link = data.collection.items[i].links[0];
        }
      });
  }
}
