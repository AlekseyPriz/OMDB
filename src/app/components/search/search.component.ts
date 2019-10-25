import { Component, OnInit } from '@angular/core';
import {FilmServiceService} from '../../services/film-service.service';
import { map } from 'rxjs/operators';

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
      .subscribe((response: any) => {
        if (response.Error === 'Movie not found!') {this.notFound = true};
        this.films.push(response);
        subscription.unsubscribe();
        }
      );

  }

}
