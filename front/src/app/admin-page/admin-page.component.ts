import { Component } from '@angular/core';
import { Film } from '../interfaces/film';
import { Screening } from '../interfaces/screening';
import { FilmService } from '../services/film.service';
import { ScreeningService } from '../services/screening.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {
  films: Film[] = [];
  screenings: Screening[] = [];

  constructor(private filmService: FilmService, private screeningService: ScreeningService, private router: Router) { }

  ngOnInit(): void {
    this.filmService.getAllFilms().subscribe((films: Film[]) => {
      this.films = films;
    });
    this.screeningService.getAllScreenings().subscribe((screenings: Screening[]) => {
      this.screenings = screenings;
    });
  }

  getFilm(id: string): Film | undefined {
    return this.films.find(film => film.id === id);
  }

  deleteFilm(id: string): void {
    this.filmService.deleteFilm(id)
    this.router.navigate(['/admin/']);
    
  }

  deleteScreening(id: string): void {
    this.screeningService.deleteScreening(id)
    this.router.navigate(['/admin/']);
  }
}
