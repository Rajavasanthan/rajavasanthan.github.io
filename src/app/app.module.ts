import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { EventComponent } from './components/event/event.component';
import { HomeComponent } from './home/home.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';


/*

Step to Follow to add new Article
Prepare title,slug,summary and image for the article
Create a Markdown File from notion and paste in the assets/markdown folder
Add new object in data.ts file with title,slug,summary and image
Add a route in routes.txt file
*/

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    HomeComponent,
    EventComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
