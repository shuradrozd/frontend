import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BooksService} from './books.service';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { BookFilterPipe } from './book-filter.pipe';
import { AddBookComponent } from './add-book/add-book.component';

@NgModule({
  declarations: [
    AppComponent,
    BookFilterPipe,
    AddBookComponent


  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
