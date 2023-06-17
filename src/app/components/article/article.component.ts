import { Component, Input } from '@angular/core';
import {ArticleDTO, ArticleType} from "../../model/article-dto.model";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  @Input() article: ArticleDTO | undefined;
  ArticleType = ArticleType;
}
