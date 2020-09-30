import { Component, OnInit, OnDestroy, HostListener, ElementRef, ViewChild } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit, OnDestroy {

  movies:never[];
  subscription: Subscription;
  clickMessage: string;
  arrayC: never[];
  pageAtual: number;
  @ViewChild('scroll', { read: ElementRef }) public scroll: ElementRef<any>;

  constructor(private moviesService: MoviesService) { }
  
  ngOnInit(): void {   
    window.addEventListener('scroll', this.onScroll, true)  
    this.subscription = this.moviesService.getPopularMovies().subscribe( (movies:any) => {
      this.movies = movies;
      this.pageAtual = 1;
    } )
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onClickMe(pageAtual: number, event: any) {
    this.pageAtual = pageAtual + 1;
    this.subscription = this.moviesService.getPopularMoviesPage(this.pageAtual).subscribe( (movies:any) => {
      this.arrayC = this.movies.concat(movies);
      this.movies = this.arrayC;
      //console.log(this.pageAtual)
      console.log(event);
      window.scroll(0, (event.pageY - event.screenY));
    } )
  }

  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    //console.log(event);
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      //console.log("End");
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
