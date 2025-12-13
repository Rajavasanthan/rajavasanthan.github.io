import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../article.service';
import { Article } from '../Model/model';
import { SeoService } from '../seo.service';

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
    private router: Router,
    private seoService: SeoService
  ) {
    this.articleSlug = this.activeRouter.snapshot.params['id'];

    this.articleService.eventJson.find((article: any) => {
      if (article.slug === this.articleSlug) {
        this.article = article;
        const url = `https://www.iamrv.pro/article/${article.slug}`;
        const imageUrl = `https://www.iamrv.pro/${article.imageUrl}`;

        this.seoService.setMetaData({
          title: `${article.title} - Hello 👋 I am RV`,
          description: article.summary,
          image: imageUrl,
          url: url,
          type: 'article',
          publishedDate: article.date.toISOString(),
          author: 'RV'
        });

        this.seoService.setJsonLd({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: article.title,
          image: [imageUrl],
          datePublished: article.date.toISOString(),
          dateModified: article.date.toISOString(),
          author: [{
            '@type': 'Person',
            name: 'RV',
            url: 'https://www.iamrv.pro/'
          }]
        });
      }
    });
  }

  backToHome() {
    this.router.navigateByUrl('');
  }
}
