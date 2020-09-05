import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';

const moviesRoutes: Route[] = [
  {
    path: 'movies', 
    component: MovieListComponent,
    children: [
      {
        path: ':id',
        component: MovieDetailComponent
      }
    ]
  }
];


@NgModule({
  declarations: [MovieItemComponent, MovieDetailComponent, MovieListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(moviesRoutes)
  ],
  exports: [RouterModule]
})
export class MovieModule { }
