import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  articleId:string = '';
  constructor(private activeRouter: ActivatedRoute) {
    console.log('ArticleComponent constructor');
    this.articleId = this.activeRouter.snapshot.params['id'];
  }
}
