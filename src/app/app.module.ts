import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BooksService} from './books.service';
import {HttpModule} from '@angular/http';
import { BookFilterPipe } from './pipes/book-filter.pipe';
import { AddBookComponent } from './add-book/add-book.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchBookComponent } from './search-book/search-book.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { PageBookComponent } from './page-book/page-book.component';
import { NotFoundComponent } from './general/components/not-found/not-found.component';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth-guard.service';
import {AuthModule} from './auth/auth.module';
import {AppRouteModule} from './app-route.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UsersService} from './general/services/users.service';


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
    ReactiveFormsModule,
    AppRoutingModule,
    AuthModule, // route module for authority pages (login, registration)
    AppRouteModule // main  route module in application
  ],
  providers: [BooksService, AuthService, AuthGuard, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
