import { Component } from '@angular/core';
import { Film } from '../interfaces/film';
import { Screening } from '../interfaces/screening';
import { FilmService } from '../services/film.service';
import { ScreeningService } from '../services/screening.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  films: Film[] = [];
  screenings: Screening[] = [];

  constructor(private filmService: FilmService, private screeningService: ScreeningService) { }

  ngOnInit(): void {
    this.filmService.getAllFilms().subscribe((films: Film[]) => {
      this.films = films;
    });
    this.screeningService.getAllScreenings().subscribe((screenings: Screening[]) => {
      this.screenings = screenings;
    });
  }
}
