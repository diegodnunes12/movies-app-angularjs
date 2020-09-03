import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movieTitle: string;

  constructor(private route: ActivatedRoute) { 
    this.movieTitle = this.route.snapshot.params.title;
  }

  ngOnInit(): void {
  }

}
