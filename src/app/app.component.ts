import {Component} from '@angular/core';
import {BooksService} from './books.service';

interface Books {
  id: number;
  author: string;
  name: string;
  orderDate: string;
  user: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchString = '';
  books: Books[] = [];

  constructor(private booksService: BooksService) {}

  loadBooks() {
    this.booksService
      .getBooks()
      .subscribe((books: Books[]) => {
      this.books = books;
      });
  }
}
