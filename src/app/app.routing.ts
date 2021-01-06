import { Routes, RouterModule } from "@angular/router";
import { ArticleComponent } from "./component/article/article.component";
import { HomePageComponent } from "./component/home-page/home-page.component";

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: "home", component: HomePageComponent},
    {path: "article/:id", component: ArticleComponent},
    {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(routes);