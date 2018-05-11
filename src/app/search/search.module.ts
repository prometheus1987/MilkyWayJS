import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { SearchComponent } from './search.component';
import { SearchService } from './shared/search.service';


@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SearchService],
  bootstrap: [SearchComponent]
})
export class SearchModule { }
