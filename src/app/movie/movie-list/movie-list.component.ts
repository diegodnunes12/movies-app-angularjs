import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
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
    window.addEventListener('scroll', this.onScroll, true)  
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

  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    console.log(event);
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      console.log("End");
    }
  }
/*   onScroll=(s)=>{
    let raw = document.getElementById('teste');
    //console.log(a);
    console.log(s.target.offsetHeight)
    console.log(s.target.scrollTop)
    console.log(s.target.scrollHeight);

    if (s.target.offsetHeight + s.target.scrollTop >= s.target.scrollHeight) {
      console.log("End");
    }

    //let sc = s.target.scrollingElement.scrollTop;
    //console.log("teste", sc);
    
  } */

}
