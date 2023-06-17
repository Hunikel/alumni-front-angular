import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {AlumniDTO} from "../../model/alumni-dto.model";

@Injectable({
  providedIn: 'root'
})
export class AlumniService {
  private baseUrl = 'api/alumni'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getAllAlumni(): Observable<AlumniDTO[]> {
    return this.http.get<AlumniDTO[]>(this.baseUrl);
  }

  addAlumni(alumni: AlumniDTO): Observable<AlumniDTO> {
    return this.http.post<AlumniDTO>(this.baseUrl, alumni);
  }

  updateAlumni(alumniId: number, alumni: AlumniDTO): Observable<AlumniDTO> {
    const url = `${this.baseUrl}/${alumniId}`;
    return this.http.put<AlumniDTO>(url, alumni);
  }

  deleteAlumni(alumniId: number): Observable<void> {
    const url = `${this.baseUrl}/${alumniId}`;
    return this.http.delete<void>(url);
  }

  getAlumniProfile(): Observable<AlumniDTO> {
    const loggedInUserId = '123'; // Replace with the actual logged-in user ID or fetch it from authentication
    const url = `${this.baseUrl}/${loggedInUserId}/profile`;
    return this.http.get<AlumniDTO>(url);
  }

}
