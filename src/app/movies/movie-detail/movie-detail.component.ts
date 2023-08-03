import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  public movieResult: Promise<Movie> | undefined;
  public loadedMovie: Movie;
  public movieId = '';

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private movieService: MoviesService,
    private router: Router
  ) {}

  async ngOnInit() {
    // ! check for query params
    this.route.paramMap.subscribe(async (paramMap) => {
      if (!paramMap.has('movieId')) {
        const id = this.route.snapshot.queryParams;
        console.log(id);

        //load movie from url query params
        await this.loadMovieByID(id.movieId);

        return;
      }

      //! get the movieId from url parameter
      this.movieId = paramMap.get('movieId');


      this.loadMovieByID(this.movieId);

    });

  }

  private async loadMovieByID(movieId: string) {
    console.log('inside loadMovieByID!!!');
    this.movieResult =  this.movieService.getMovieById(movieId);
    this.movieResult
      .then((movie) => {
        console.log(movie);

        // ! check if response is false
        if (movie.Response === 'False') {
          console.log('movieId not found');
          // * redirect to not found page
          this.router.navigate(['/404']);
          return;
        }
        // * returns loaded movie;
        this.loadedMovie = movie;
      })
      .catch((error) => {
        console.error('An error occurred while fetching the movie:', error);
        // Handle the error with redirect
        // this.navCtrl.navigateBack('/'); // using ionic nav controller
        this.goBack()
      });
  }

  // TODO: add query param to url



  goBack() {
    this.navCtrl.navigateBack('/'); // using ionic nav controller
    // this.router.navigate(['/movie'], {
    //   relativeTo: this.route,
    //   queryParamsHandling: 'preserve',
    // });
  }


}
