import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FilmService } from '../services/film.service';
import { Film } from '../interfaces/film';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-film-page',
  templateUrl: './edit-film-page.component.html',
  styleUrls: ['./edit-film-page.component.css']
})
export class EditFilmPageComponent {
  id: string = '';

  constructor(private formBuilder: FormBuilder, private filmService: FilmService, private activatedRoute: ActivatedRoute) { }

  editFilmForm = this.formBuilder.group ({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    director: new FormControl('', Validators.required),
    duration: new FormControl('', Validators.required),
    releaseDate: new FormControl(0, Validators.required),
    poster: new FormControl('', Validators.required),
    genre: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  updateFilm(): void {
    this.filmService.updateFilm(this.id, <Film>this.editFilmForm.value);
  }
}
