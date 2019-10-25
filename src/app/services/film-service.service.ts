import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmServiceService {

  private apiKey = '23bbbb62';

  constructor(private http: HttpClient) { }

  searchFilms(filmName) {
    return this.http.get(`http://www.omdbapi.com/?t=${filmName}&apikey=${this.apiKey}`);
  }

  getFilmById(filmId) {
    return this.http.get(`http://www.omdbapi.com/?i=${filmId}&apikey=${this.apiKey}`);
  }
}
