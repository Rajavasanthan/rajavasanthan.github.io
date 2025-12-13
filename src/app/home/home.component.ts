import { Component } from '@angular/core';
import { ArticleService } from '../article.service';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  eventJson: any;
  constructor(
    private articleService: ArticleService,
    private seoService: SeoService
  ) {
    this.seoService.setMetaData({
      title: "Hello i am RV - Tech Enthusiast, Entreprenur, Mentor",
      description: "Welcome to the world of RV. Explore articles on AI, Technology, and Mentorship.",
      image: "https://www.iamrv.pro/assets/images/home-page.png",
      url: "https://www.iamrv.pro/",
      type: "website"
    });

    this.seoService.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Hello i am RV',
      url: 'https://www.iamrv.pro/',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://www.iamrv.pro/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    });

    this.eventJson = this.articleService.eventJson;
  }
}
