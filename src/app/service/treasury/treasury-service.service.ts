import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AlumniDTO} from "../../model/alumni-dto.model";

@Injectable({
  providedIn: 'root'
})
export class TreasuryService {
  private baseUrl = 'http://api.example.com/treasury'; // Replace with your API endpoint
  constructor(private http: HttpClient) {}

  getAlumniList(): Observable<AlumniDTO[]> {
    return this.http.get<AlumniDTO[]>(`${this.baseUrl}/alumni`);
  }

  markPaid(alumniId: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/alumni/${alumniId}/markPaid`, {});
  }
}
