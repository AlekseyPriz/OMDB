import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmServiceService {

  constructor(private http: HttpClient) { }

  serchFilms (filmName) {
    return this.http.get(`http://www.omdbapi.com/?t=${filmName}&apikey=23bbbb62`);
  }
}
