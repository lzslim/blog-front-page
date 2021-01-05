import { Article } from "./article.model";
import { Injectable } from "@angular/core";
import { Observable, from } from "rxjs";
import { StaticDataSource } from "./articleData"

@Injectable()
export class ArticleService {
    public articles = [];
    public recentArticles = [];

    constructor(private dataSource: StaticDataSource) {
        dataSource.getArticles().subscribe(data => {
            this.articles = data;
            this.recentArticles = data;
        })
    }
}