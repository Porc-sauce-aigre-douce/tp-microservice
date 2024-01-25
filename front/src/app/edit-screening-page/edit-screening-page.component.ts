import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FilmService } from '../services/film.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from '../interfaces/film';
import { ScreeningService } from '../services/screening.service';
import { Screening } from '../interfaces/screening';

@Component({
  selector: 'app-edit-screening-page',
  templateUrl: './edit-screening-page.component.html',
  styleUrls: ['./edit-screening-page.component.css']
})
export class EditScreeningPageComponent {
  id: string = '';
  films: Film[] = [];

  constructor(
    private formBuilder: FormBuilder, private filmService: FilmService, private screeningService: ScreeningService,
    private activatedRoute: ActivatedRoute, private router: Router) { }

  editScreeningForm = this.formBuilder.group({
    date: new FormControl('', Validators.required),
    hour: new FormControl('', Validators.required),
    filmId: new FormControl('', Validators.required),
    room: new FormControl(0, Validators.required),
  });

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });
    this.filmService.getAllFilms().subscribe((films: Film[]) => {
      this.films = films;
    });
  }

  updateScreening(): void {
    this.screeningService.updateScreening(this.id, <Screening>this.editScreeningForm.value);
    this.router.navigate(['/admin/']);
  }

}
