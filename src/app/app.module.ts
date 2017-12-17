import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import { NotFoundComponent } from './general/components/not-found/not-found.component';
import {AuthServiceOld} from './auth.service';
import {AuthGuard} from './auth-guard.service';
import {AuthModule} from './auth/auth.module';
import {AppRouteModule} from './app-route.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UsersService} from './general/services/users.service';
import {AuthService} from './general/services/auth.service';
import {BookService} from './general/services/book.service';
import {BooksModule} from './books/books.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule, // route module for authority pages (login, registration)
    BooksModule, // route module for books pages (find books , add books)
    AppRouteModule // main  route module in application

  ],
  providers: [UsersService, AuthService, BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
