import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../services/movies.service';
import { Movie, MovieIndex } from '../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  public movies: MovieIndex[] = [];

  // basePosterUrl = 'http://img.omdbapi.com/?i=tt3896198&h=600&apikey=67ea6085';
  public basePosterUrl = 'http://img.omdbapi.com/?i='
  public api_key = '67ea6085';

  constructor(
    private route: ActivatedRoute,
    // private navCtrl: NavController, //? can I use this?
    private movieService: MoviesService,
    private router: Router
  ) {}


  // TODO: get all movies

  private async getAllMovies() {

    this.movies = await this.movieService.movies;
    console.log(this.movies)
  }

  getMovieSrc(movieId: string): string {
    return `${this.basePosterUrl}${movieId}&h=300&apikey=${this.api_key}`;
  }


  //TODO: display grid of movie poster thumbnails (5)


  ngOnInit() {

    console.log('movies.component.ts ngOnInit()')
    this.getAllMovies();
  }




}
