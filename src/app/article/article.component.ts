import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';
import { Article } from '../Model/model';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  articleSlug!:string;
  article!:Article
  
  constructor(private activeRouter: ActivatedRoute,private articleService:ArticleService) {
    this.articleSlug = this.activeRouter.snapshot.params['id'];
    
    this.articleService.eventJson.find((article: any) => {
      if(article.slug === this.articleSlug) {
        console.log(article)
        this.article = article
      }
    })
  }
}
