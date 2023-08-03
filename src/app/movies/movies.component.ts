import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../services/movies.service';
import { Movie, MovieIndex } from '../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  public movies: MovieIndex[] = [];

  // basePosterUrl = 'http://img.omdbapi.com/?i=tt3896198&h=600&apikey=67ea6085';
  public basePosterUrl = 'http://img.omdbapi.com/?i=';
  private api_key = '67ea6085';

  constructor(
    private movieService: MoviesService,
  ) {}

  // TODO: get all movies

  private async getAllMovies() {
    this.movies = await this.movieService.movies;
    console.log(this.movies);
  }

  getMovieSrc(movieId: string): string {
    return `${this.basePosterUrl}${movieId}&h=300&apikey=${this.api_key}`;
  }

  //! displays 3X# grid of movies poster thumbnails on large screen

  ngOnInit() {
    this.getAllMovies();
  }
}
