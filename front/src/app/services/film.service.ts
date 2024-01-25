import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { Film } from '../interfaces/film';
import { FilmServer } from '../interfaces/film-server';
@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private apiUrl = 'http://localhost:8080/film'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getAllFilms(): Observable<Film[]> {
    return this.http.get<FilmServer[]>(this.apiUrl).pipe(
      map((films) => {
        return films.map((film): Film => {
          return {
            id: film.id,
            title: film.titre,
            releaseDate: film.anneeSortie,
            director: film.realisateur,
            genre: film.genre,
            duration: film.duree,
            description: film.description,
            poster: film.image,
          };
        });
      })
    );
  }

  getFilmById(id: number): Observable<Film> {
    return this.http.get<Film>(`${this.apiUrl}/${id}`);
  }

  createFilm(film: Film) {
    const filmServer: FilmServer = {
      id: "",
      titre: film.title,
      anneeSortie: film.releaseDate,
      realisateur: film.director,
      genre: film.genre,
      duree: film.duration,
      description: film.description,
      image: film.poster,
    };
    this.http.post(this.apiUrl, filmServer).subscribe();
  }

  updateFilm(id: string, film: Film) {
    const filmServer: FilmServer = {
      id: id,
      titre: film.title,
      anneeSortie: film.releaseDate,
      realisateur: film.director,
      genre: film.genre,
      duree: film.duration,
      description: film.description,
      image: film.poster,
    };
    this.http.put(`${this.apiUrl}/${id}`, filmServer).subscribe();
  }

  deleteFilm(id: string) {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe();
  }
}
