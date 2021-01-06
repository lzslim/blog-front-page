import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../model/article.service';
import { ActivatedRoute } from "@angular/router";
import { Article } from "../../model/article.model"

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article = null;
  constructor(private articleService: ArticleService,
              private activeRoute: ActivatedRoute) { 
                let articleId = activeRoute.snapshot.params["id"];
                this.article = articleService.getArticle(articleId);
              }


  ngOnInit() {
  }

}
