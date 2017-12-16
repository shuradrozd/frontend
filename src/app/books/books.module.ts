import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GeneralModule} from '../general/general.module';
import {BooksRoutingModule} from './books-routing.module';
import { BooksComponent } from './books.component';
import { FindBooksPageComponent } from './find-books-page/find-books-page.component';
import {FindBooksFilterPipe} from '../general/pipes/find-books-filter.pipe';
import { AddBooksPageComponent } from './add-books-page/add-books-page.component';
import { DetailBooksPageComponent } from './detail-books-page/detail-books-page.component';

@NgModule({
  imports: [
    CommonModule,
    GeneralModule,
    BooksRoutingModule
  ],
  declarations: [BooksComponent, FindBooksPageComponent, FindBooksFilterPipe, AddBooksPageComponent, DetailBooksPageComponent]
})
export class BooksModule { }
