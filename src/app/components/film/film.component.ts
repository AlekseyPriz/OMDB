import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FilmServiceService} from '../../services/film-service.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  public filmId;
  public film;
  public isLoaded = false;


  constructor(
    private route: ActivatedRoute,
    private filmServiceService: FilmServiceService,
    private router: Router) { }

  ngOnInit() {
    this.filmId = this.route.snapshot.params.id;
    const sub = this.filmServiceService.getFilmById(this.filmId)
      .subscribe( filmAnswer => {
        this.film = filmAnswer;
        this.isLoaded = true;
        sub.unsubscribe();
      });
  }

  back() {
    this.router.navigate(['/search']);
  }

}
