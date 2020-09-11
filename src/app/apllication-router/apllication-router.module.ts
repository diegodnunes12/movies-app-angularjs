import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from '../shared/home/home.component';
import { AboutComponent } from '../shared/about/about.component';
import { MovieDetailComponent } from '../movie/movie-detail/movie-detail.component';
import { MovieListComponent } from '../movie/movie-list/movie-list.component';

const routes: Route[] = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'movies', component: MovieListComponent
  },
  {
    path: 'movie/:id', component: MovieDetailComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class ApllicationRouterModule { }
