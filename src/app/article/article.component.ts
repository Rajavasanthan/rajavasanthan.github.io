import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
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
    private meta: Meta,
    private router: Router
  ) {
    this.articleSlug = this.activeRouter.snapshot.params['id'];

    this.articleService.eventJson.find((article: any) => {
      if (article.slug === this.articleSlug) {
        console.log(article);
        this.article = article;
        this.title.setTitle(`${article.title} - Hello 👋 I am RV`);
        this.meta.addTag({
          content: `${article.title} - Hello 👋 I am RV`,
          property: 'og:title',
        });
        this.meta.addTag({
          content: `https://www.iamrv.pro/${article.imageUrl}`,
          property: 'og:image',
        });
        this.meta.addTag({
          content: `https://www.iamrv.pro/${article.imageUrl}`,
          property: 'og:image:secure_url',
        });
        this.meta.addTag({
          content: `image/jpeg`,
          property: 'og:image:type',
        });
        this.meta.addTag({
          content: `400`,
          property: 'og:image:width',
        });
        this.meta.addTag({
          content: `400`,
          property: 'og:image:height',
        });
      }
    });
  }

  backToHome() {
    this.router.navigateByUrl('');
  }
}
