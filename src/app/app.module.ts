import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BooksService} from './books.service';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { BookFilterPipe } from './pipes/book-filter.pipe';
import { AddBookComponent } from './add-book/add-book.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchBookComponent } from './search-book/search-book.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { PageBookComponent } from './page-book/page-book.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth-guard.service';
import {AuthModule} from './auth/auth.module';
import {AppRouteModule} from "./app-route.module";


@NgModule({
  declarations: [
    AppComponent,
    BookFilterPipe,
    AddBookComponent,
    HomePageComponent,
    SearchBookComponent,
    PageBookComponent,
    NotFoundComponent


  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    AuthModule,
    AppRouteModule // main  route module in application
  ],
  providers: [BooksService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
