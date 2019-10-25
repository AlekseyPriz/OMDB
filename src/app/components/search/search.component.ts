import { Component, OnInit } from '@angular/core';
import {FilmServiceService} from '../../services/film-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public films = [];
  public notFound = false;


  constructor(private filmServiceService: FilmServiceService) { }

  ngOnInit() {
  }

  getFilm(filmName) {
    this.films = [];
    this.notFound = false;

    const subscription =  this.filmServiceService.searchFilms(filmName)
      .subscribe((responce) => {
        if (responce.Response ===  "False") {this.notFound = true};
        this.films.push(responce);
        subscription.unsubscribe();
        }
      );

  }

}
