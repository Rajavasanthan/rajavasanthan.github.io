import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  eventJson: any;
  constructor(
    private articleService: ArticleService,
    private title: Title,
    private meta: Meta
  ) {
    this.title.setTitle("Hello i am RV - Tech Enthusiast, Entreprenur, Mentor")
    this.meta.addTag({
      content: `Hello 👋 i am RV - Tech Enthusiast, Entreprenur, Mentor`,
      property: 'og:title',
    });
    this.meta.addTag({
      content: `https://www.iamrv.pro/assets/images/home-page.jpeg`,
      property: 'og:image',
    });
    this.meta.addTag({
      content: `https://www.iamrv.pro/assets/images/home-page.jpeg`,
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
    this.eventJson = this.articleService.eventJson;
  }
}
