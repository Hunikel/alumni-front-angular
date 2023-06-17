import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {MailingListDTO} from "../../model/mailing-list-dto.model";

@Injectable({
  providedIn: 'root'
})
export class MailingListService {
  private baseUrl = 'api/mailing-lists'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getAllMailingLists(): Observable<MailingListDTO[]> {
    return this.http.get<MailingListDTO[]>(this.baseUrl);
  }

  createMailingList(mailingList: MailingListDTO): Observable<MailingListDTO> {
    return this.http.post<MailingListDTO>(this.baseUrl, mailingList);
  }

  deleteMailingList(mailingListId: number): Observable<void> {
    const url = `${this.baseUrl}/${mailingListId}`;
    return this.http.delete<void>(url);
  }
}
