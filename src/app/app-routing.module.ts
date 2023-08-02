import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'movie/details/:movieId',
    component: MovieDetailComponent,
  },
  {
    path: 'movie/details',
    component: MovieDetailComponent,
  },
  {
    path: '',
    redirectTo: 'movie',
    pathMatch: 'full',
  },
  {
    path: 'movie',
    component: MoviesComponent,
  },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
