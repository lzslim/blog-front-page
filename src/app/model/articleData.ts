import { Article } from "./article.model";
import { Injectable } from "@angular/core";
import { Observable, from } from "rxjs";

@Injectable()
export class StaticDataSource {
    public articles: Article[] = [
        new Article(1, "mark", "2020-01-01", "2020-01-01", "text", "title 1"),
        new Article(2, "hitler", "2020-01-01", "2020-01-01", "text", "title 2"),
        new Article(3, "jordan", "2020-01-01", "2020-01-01", "text", "title 3"),
        new Article(4, "cathy", "2020-01-01", "2020-01-01", "原因是，连续的英文字母被理解为一个单词了，所以，一般情况下是不会出现的，因为单词就没有那么长。换个行就好了原因是，连续的英文字母被理解为一个单词了，所以，一般情况下是不会出现的，因为单词就没有那么长。换个行就好了原因是，连续的英文字母被理解为一个单词了，所以，一般情况下是不会出现的，因为单词就没有那么长。换个行就好了", "title 4"),
        new Article(5, "nancy", "2020-01-01", "2020-01-01", "text", "title 5"),
        new Article(6, "lily", "2020-01-01", "2020-01-01", "text", "title 6"),
    ];

    getArticles(): Observable<Article[]> {
        return from([this.articles]);
    }
}

