import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';
import { Article } from '../Model/model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent {
  articleSlug!: string;
  article!: Article;

  constructor(
    private activeRouter: ActivatedRoute,
    private articleService: ArticleService,
    private title: Title,
    private meta: Meta
  ) {
    this.articleSlug = this.activeRouter.snapshot.params['id'];

    this.articleService.eventJson.find((article: any) => {
      if (article.slug === this.articleSlug) {
        console.log(article);
        this.article = article;
        this.title.setTitle(article.title);
        this.meta.addTag({
          content: article.title,
          name: 'og:title',
        });
        this.meta.addTag({
          content: `${window.location.hostname}/${article.imageUrl}`,
          name: 'og:image',
        });
        this.meta.addTag({
          content: `${article.summary}`,
          name: 'og:description',
        });
      }
    });
  }
}
