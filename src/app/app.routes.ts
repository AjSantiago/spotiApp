import { Routes } from '@angular/router';
//import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'artist/:id', component: ArtistaComponent },
  { path: '**', component: HomeComponent },
];

// @NgModule({
//   imports: [RouterModule.forChild(ROUTES)],
//   exports: [RouterModule],
// })
// export class FeatureRoutingModule {}

//export const APP_ROUTING = RouterModule.forRoot(ROUTES);
