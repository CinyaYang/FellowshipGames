import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CategoryComponent } from './catalogue/category/category.component';
import { QuestionInfoComponent } from './question-info/question-info.component';
import { QuestionComponent } from './question-info/question/question.component';
import { AnswerComponent } from './question-info/answer/answer.component';
import {SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [
    AppComponent,
    CatalogueComponent,
    CategoryComponent,
    QuestionInfoComponent,
    QuestionComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
