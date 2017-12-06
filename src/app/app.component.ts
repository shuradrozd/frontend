import {Component} from '@angular/core';
import {BooksService} from './books.service';
import {Book} from './interfaces/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchString = '';
  books: Book[] = [];

  constructor(private booksService: BooksService) {}

  loadBooks() {
    this.booksService.getBooks()
      .subscribe(
      (books: Book[]) => {
      this.books = books;
      }, (error) => {
        console.log(error);
        });
  }
  setOrderDate(book: Book) {
    const orderDate = new Date().toDateString();
    // console.log(id);
    this.booksService.changeOrderDate(book, orderDate)
      .subscribe();
    // .subscribe((data) => {
      //   console.log(data);
      // });
    // this.books[id - 1].orderDate = new Date().toDateString();
  }
}
