import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FilmService } from '../services/film.service';
import { Film } from '../interfaces/film';

@Component({
  selector: 'app-add-film-page',
  templateUrl: './add-film-page.component.html',
  styleUrls: ['./add-film-page.component.css']
})
export class AddFilmPageComponent {
  constructor(private formBuilder: FormBuilder, private filmService: FilmService) { }

  createFilmForm = this.formBuilder.group ({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    director: new FormControl('', Validators.required),
    duration: new FormControl('', Validators.required),
    releaseDate: new FormControl(0, Validators.required),
    poster: new FormControl('', Validators.required),
    genre: new FormControl('', Validators.required),
  });

  createFilm(): void {
    this.filmService.createFilm(<Film>this.createFilmForm.value);
  }
}
