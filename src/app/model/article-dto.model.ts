export class ArticleDTO {
  id: number;
  title: string;
  content: string;
  fileName?: string;
  articleType: ArticleType;
  archived: boolean;

  constructor(id: number, title: string, content: string, fileName: string, articleType: ArticleType, archived: boolean) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.fileName = fileName;
    this.articleType = articleType;
    this.archived = archived;
  }
}


export enum ArticleType {
  EVENT = 'EVENT',
  ARTICLE = 'ARTICLE'
}
