import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Output() getFilm = new EventEmitter<any>();




  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.getFilm.emit(form.value.filmName);
    form.reset();
  }

}
