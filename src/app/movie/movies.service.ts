import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private API_KEY = '42d503a798cec5824a2b2ce5bd34169e';

  constructor(private http: HttpClient) { }

  private withBaseUrl(path: string){
    return `https://api.themoviedb.org/3/${path}?api_key=${this.API_KEY}`
  }

  getPopularMovies(){
    return this.http.get(this.withBaseUrl('movie/popular'));
  }
}
