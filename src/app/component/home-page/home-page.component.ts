import { Component, OnInit } from '@angular/core';
import { ArticleService } from "../../model/article.service";
import { Article } from "../../model/article.model";
//import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  get articles(): Article[] {
    return this.articleService.articles;
  }

  get recentArticles(): Article[] {
    return this.articleService.recentArticles;
  }

  ngOnInit() {
  }

}
