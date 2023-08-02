import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieIndex } from '../models/movie';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  //Create array of hardcoded movies to display on homepage
  // OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=67ea6085

  // Poster API: http://img.omdbapi.com/?i=tt3896198&h=600&apikey=67ea6085

  private moviesArray: Movie[] = [];

  private _movies: MovieIndex[] = [
    { id: 'tt0468569', title: 'The Dark Knight' },
    { id: 'tt0167260', title: 'The Lord of the Rings: The Return of the King' },
    { id: 'tt0133093', title: 'The Matrix' },
    { id: 'tt1219289', title: 'Limitless' },
    { id: 'tt0499549', title: 'Avatar' },
    { id: 'tt0371746', title: 'Iron Man' },
    { id: 'tt1375666', title: 'Inception' },
    { id: 'tt0325710', title: 'The Last Samurai' },
    { id: 'tt3896198', title: 'Guardians of the Galaxy Vol. 2' },
  ];

  private api_key = '67ea6085';

  private baseUrl = 'http://www.omdbapi.com/';
  // private baseUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=8ae76fa0';

  constructor(private readonly http: HttpClient) {}

  // public getMovies() {}

  get movies() {
    return [...this._movies];
  }

  public async getMovieById(id: string): Promise<Movie> {
    try {

      return await this.http
        .get<Movie>(`${this.baseUrl}?i=${id}&apikey=${this.api_key}`)
        .pipe(take(1))
        .toPromise();

    } catch (error) {

      console.error('An error occurred while fetching the movie:', error);
      // Handle the error as needed
      throw error;
    }

  }
}
