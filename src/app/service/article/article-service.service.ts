import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ArticleDTO} from "../../model/article-dto.model";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private baseUrl = 'http://api.example.com/articles'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getArticles(): Observable<ArticleDTO[]> {
    return this.http.get<ArticleDTO[]>(this.baseUrl);
  }

  deleteArticle(articleId: number): Observable<void> {
    const url = `${this.baseUrl}/${articleId}`;
    return this.http.delete<void>(url);
  }
}
