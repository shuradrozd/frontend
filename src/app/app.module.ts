import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BooksService} from './books.service';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { BookFilterPipe } from './book-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BookFilterPipe


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
