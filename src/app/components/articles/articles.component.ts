import { Component, OnInit } from '@angular/core';
import {ArticleDTO, ArticleType} from "../../model/article-dto.model";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: ArticleDTO[] = [];
  newArticle: ArticleDTO = {
    id: 0,
    title: '',
    content: '',
    fileName: '',
    articleType: ArticleType.EVENT,
    archived: false
  };

  ngOnInit() {
    // Retrieve articles from a service or API
    // For example, you can call a method here to fetch the articles and assign them to the 'articles' property.
  }

  addArticle() {
    // Add logic to handle adding a new article
    // For example, you can call a service method to add the new article to the backend
    // and then update the 'articles' array with the returned article.
  }
}
