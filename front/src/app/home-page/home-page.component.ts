import { Component } from '@angular/core';
import { Film } from '../interfaces/film';
import { Screening } from '../interfaces/screening';
import { FilmService } from '../services/film.service';
import { ScreeningService } from '../services/screening.service';
import { ActivatedRoute, Router } from '@angular/router';
import { role } from '../interfaces/user';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  films: Film[] = [];
  screenings: Screening[] = [];
  isBookSuccess: boolean = false;

  constructor(private filmService: FilmService, private screeningService: ScreeningService, private router: Router,
    private activatedRoute: ActivatedRoute) { }
    
    ngOnInit(): void {
      this.filmService.getAllFilms().subscribe((films: Film[]) => {
        this.films = films;
      });
      this.screeningService.getAllScreenings().subscribe((screenings: Screening[]) => {
        this.screenings = screenings;
      });
      this.activatedRoute.params.subscribe(params => {
        this.isBookSuccess = params['isBookSuccess'];
      });
      if(sessionStorage.getItem('role') === role.Admin) {
        this.router.navigate(['/admin']);
      }
  }

  getFilm(id: string): Film | undefined {
    return this.films.find(film => film.id === id);
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem('username') !== null;
  }

  book(id: string): void {
    this.screeningService.bookScreening(id);
    this.isBookSuccess = true;
  }

  logOut(): void {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }
}
