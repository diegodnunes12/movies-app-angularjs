import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private API_KEY = '42d503a798cec5824a2b2ce5bd34169e';

  constructor(private http: HttpClient) { }

  private withBaseUrl(path: string){
    return `https://api.themoviedb.org/3/${path}?api_key=${this.API_KEY}&language=pt-BR`
  }

  getPopularMovies(){
    return this.http.get(this.withBaseUrl('movie/popular'))
    .pipe(
      map((response:any) => response.results)
    );
  }

  getPopularMoviesPage(page: number){
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.API_KEY}&language=pt-BR&page=${page}`)
    .pipe(
      map((response:any) => response.results)
    );
  }

  getMovie(id: string){
    return this.http.get(this.withBaseUrl(`movie/${id}`));
  }

  getFormatedHour(minutesTotal: number){
    let seconds = minutesTotal * 60;
    let days = Math.floor(seconds / 86400);
    seconds -= days * 86400;
    let hours = Math.floor(seconds / 3600) % 24;
    seconds -= hours * 3600;
    let minutes = Math.floor(seconds / 60) % 60;
    return hours + "h " + minutes + "m ";
  }
}
