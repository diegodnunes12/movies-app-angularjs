import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, OnDestroy {

  movies:[];
  subscription: Subscription;

  constructor(private moviesService: MoviesService) { }
  
  ngOnInit(): void {     
    this.subscription = this.moviesService.getPopularMovies().subscribe( (movies:any) => {
      this.movies = movies;
      console.log(movies);
    } )
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
