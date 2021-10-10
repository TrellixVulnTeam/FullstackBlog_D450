import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ArticleListsComponent } from './article-lists/article-lists.component';

const routes: Routes = [
  { path: 'articles', component: ArticleListsComponent},
  { path: 'about', component: AboutComponent},
  { path: '', component: ArticleListsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
