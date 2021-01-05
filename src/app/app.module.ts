import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavHeadComponent } from './component/nav-head/nav-head.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { StaticDataSource } from "./model/articleData";
import { ArticleService } from "./model/article.service";

@NgModule({
  declarations: [
    AppComponent,
    NavHeadComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [StaticDataSource, ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
