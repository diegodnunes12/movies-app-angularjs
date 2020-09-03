import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';



@NgModule({
  declarations: [MovieItemComponent, MovieDetailComponent],
  imports: [
    CommonModule
  ]
})
export class MovieModule { }
