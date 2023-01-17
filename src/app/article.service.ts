import { Injectable } from '@angular/core';
import { articles } from './data';
import { Article } from './Model/model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  eventJson!:Article[]
  constructor() { 
    this.eventJson = articles.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
  }


}
