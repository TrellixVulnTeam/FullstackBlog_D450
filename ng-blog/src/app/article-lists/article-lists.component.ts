import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ARTICLES } from '../mock-articles';

@Component({
  selector: 'app-article-lists',
  templateUrl: './article-lists.component.html',
  styles: [
  ]
})
export class ArticleListsComponent implements OnInit {

  articles: Article[] = [];

  constructor() { }

  ngOnInit() {
    this.articles = ARTICLES;
    console.log(this.articles);
  }

}

