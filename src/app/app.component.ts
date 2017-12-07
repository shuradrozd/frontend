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
  searchFieldName = '';
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
  onChangeStatus(book: Book) {
    if (this.checkOrderDate(book.orderDate)) {
      this.cancelOrderDate(book);
    } else {
      this.setOrderDate(book);
    }
  }
  setOrderDate(book: Book) {
    const orderDate = new Date().toDateString();
    this.booksService.changeOrderDate(book, orderDate)
    .subscribe((data) => {
        console.log(data);
      });
  }


  cancelOrderDate(book: Book) {
    const orderDate = '';
    this.booksService.changeOrderDate(book, orderDate)
    .subscribe((data) => {
      console.log(data);
    });
  }

  checkOrderDate(date: string) {
    if (date.length > 0) {
      return true;
    }
    return false;
  }

  filter(event: Event ) {
    this.searchFieldName = (<HTMLInputElement>event.target).value;
  }

}
