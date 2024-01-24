import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from '../interfaces/film';
@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private apiUrl = 'localhost:8080/film'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getAllFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.apiUrl);
  }

  getFilmById(id: number): Observable<Film> {
    return this.http.get<Film>(`${this.apiUrl}/${id}`);
  }

  createFilm(film: Film) {
    this.http.post(this.apiUrl, film);
  }

  updateFilm(id: number, film: Film) {
    this.http.put(`${this.apiUrl}/${id}`, film);
  }

  deleteFilm(id: number) {
    this.http.delete(`${this.apiUrl}/${id}`);
  }
}
