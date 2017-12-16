import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BooksComponent} from './books.component';
import {FindBooksPageComponent} from './find-books-page/find-books-page.component';
import {AddBooksPageComponent} from './add-books-page/add-books-page.component';

const routes: Routes = [
    {path: 'books', component: BooksComponent, children: [
    {path: 'findBooks', component: FindBooksPageComponent },
    {path: 'addBooks', component: AddBooksPageComponent },
    ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]

})
export class BooksRoutingModule { }
