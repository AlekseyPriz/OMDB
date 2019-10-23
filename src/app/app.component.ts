import { Component } from '@angular/core';
import {FilmServiceService} from './services/film-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OMDB';
  public films = [];

  constructor(private filmServiceService: FilmServiceService) {
  }

  getFilm(filmName) {
    this.films = [];
    this.filmServiceService.serchFilms(filmName)
      .subscribe((responce) => {
        this.films.push(responce);
      }
      );
  }
}
