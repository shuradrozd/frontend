import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BooksService} from './books.service';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent


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
