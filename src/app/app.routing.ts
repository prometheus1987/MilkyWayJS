import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RoversComponent } from "./rovers/rovers.component";
import { ApodComponent } from './apod/apod.component'
import { HomeComponent } from "./home/home.component";
import { SearchComponent} from './search/search.component';
import { OrbitalComponent } from './orbital/orbital.component';


export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'rovers',
    component: RoversComponent
  },
  {
    path: 'apod',
    component: ApodComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'orbital',
    component: OrbitalComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
