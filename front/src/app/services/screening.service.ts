import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Screening } from '../interfaces/screening';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreeningService {

  private apiUrl = 'http://localhost:3000/seance'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getAllScreenings(): Observable<Screening[]> {
    return this.http.get<Screening[]>(this.apiUrl);
  }

  getScreeningById(id: string): Observable<Screening> {
    return this.http.get<Screening>(`${this.apiUrl}/${id}`);
  }

  bookScreening(id: string) {
    this.http.put(`${this.apiUrl}/book/${id}`, {userId: sessionStorage.getItem("id")}).subscribe();
  }

  createScreening(screening: Screening) {
    this.http.post(this.apiUrl, screening).subscribe();
  }

  updateScreening(id: string, screening: Screening) {
    this.http.put(`${this.apiUrl}/${id}`, screening).subscribe();
  }

  deleteScreening(id: string) {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe();
  }  
}
