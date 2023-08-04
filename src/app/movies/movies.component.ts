import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { MovieIndex } from '../models/movie';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  public movies: MovieIndex[] = [];

  public basePosterUrl = 'http://img.omdbapi.com/?i=';

  constructor(
    private movieService: MoviesService,
  ) {}

  private async getAllMovies() {
    this.movies = await this.movieService.movies;
  }

  getMovieSrc(movieId: string): string {
    return `${this.basePosterUrl}${movieId}&h=300&apikey=${environment.movieAPIKey}`;
  }

  //! displays 3X# grid of movies poster thumbnails on large screen

  ngOnInit() {
    this.getAllMovies();
  }
}
