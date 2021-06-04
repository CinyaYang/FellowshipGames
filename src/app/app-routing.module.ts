import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuestionInfoComponent} from './question-info/question-info.component'
import {CatalogueComponent} from './catalogue/catalogue.component'
const routes: Routes = [
  {path:'questionInfo/:questionId', component: QuestionInfoComponent },
  {path:'', component: CatalogueComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
