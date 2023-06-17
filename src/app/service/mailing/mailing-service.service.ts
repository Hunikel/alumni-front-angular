import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailingService {
  private baseUrl = 'http://api.example.com/mailing'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  sendEmail(recipients: string[], subject: string, content: string): Observable<void> {
    const payload = {
      recipients,
      subject,
      content
    };

    return this.http.post<void>(`${this.baseUrl}/sendEmail`, payload);
  }
}
