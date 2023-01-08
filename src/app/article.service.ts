import { Injectable } from '@angular/core';
import { articles } from './data';
import { Article } from './Model/model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  eventJson:Article[] = articles
  constructor() { }


}
