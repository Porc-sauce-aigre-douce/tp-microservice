import { Component } from '@angular/core';
import { Screening } from '../interfaces/screening';
import { Film } from '../interfaces/film';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FilmService } from '../services/film.service';
import { ScreeningService } from '../services/screening.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-screening-page',
  templateUrl: './add-screening-page.component.html',
  styleUrls: ['./add-screening-page.component.css']
})
export class AddScreeningPageComponent {
  id: string = '';
  films: Film[] = [];

  constructor(
    private formBuilder: FormBuilder, private filmService: FilmService, private screeningService: ScreeningService, 
    private router: Router, private activatedRoute: ActivatedRoute) { }

  createScreeningForm = this.formBuilder.group({
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

  createScreening(): void {
    this.screeningService.createScreening(<Screening>this.createScreeningForm.value);
    this.router.navigate(['/admin/']);
  }
}
