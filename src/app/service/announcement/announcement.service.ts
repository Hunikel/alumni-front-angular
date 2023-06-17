import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnnouncementDTO } from '../../model/announcement-dto.model';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  private baseUrl = 'http://api.example.com/announcements'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getAllAnnouncements(): Observable<AnnouncementDTO[]> {
    return this.http.get<AnnouncementDTO[]>(this.baseUrl);
  }

  getAnnouncementById(id: number): Observable<AnnouncementDTO> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<AnnouncementDTO>(url);
  }

  createAnnouncement(announcement: AnnouncementDTO): Observable<AnnouncementDTO> {
    return this.http.post<AnnouncementDTO>(this.baseUrl, announcement);
  }

  updateAnnouncement(announcement: AnnouncementDTO): Observable<AnnouncementDTO> {
    const url = `${this.baseUrl}/${announcement.id}`;
    return this.http.put<AnnouncementDTO>(url, announcement);
  }

  deleteAnnouncement(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
