import { Component } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  eventJson:any;
  constructor(private articleService:ArticleService){
    this.eventJson = this.articleService.eventJson
  }
}
