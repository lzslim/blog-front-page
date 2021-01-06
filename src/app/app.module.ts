import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavHeadComponent } from './component/nav-head/nav-head.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { ArticleComponent } from './component/article/article.component'
import { StaticDataSource } from "./model/articleData";
import { ArticleService } from "./model/article.service";
import { routing } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    NavHeadComponent,
    HomePageComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [StaticDataSource, ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
