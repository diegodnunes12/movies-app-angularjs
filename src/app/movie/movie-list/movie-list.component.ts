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
  clickMessage: string;

  constructor(private moviesService: MoviesService) { }
  
  ngOnInit(): void {     
    this.subscription = this.moviesService.getPopularMovies().subscribe( (movies:any) => {
      this.movies = movies;
    } )
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onClickMe() {
    this.subscription = this.moviesService.getPopularMovies2().subscribe( (movies:any) => {
      var arrayC= this.movies.concat(movies);
      //this.movies = arrayC;
    } )
    this.clickMessage = 'You are my hero!';
  }

}
