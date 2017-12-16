import { Component } from '@angular/core';
import { Book } from '../../general/models/book.model';
import {BookService} from '../../general/services/book.service';

@Component({
  selector: 'app-find-books-page',
  templateUrl: './find-books-page.component.html',
  styleUrls: ['./find-books-page.component.css']
})
export class FindBooksPageComponent {

  books: Book[] = [];
  searchString = '';
  searchFieldName = '';

  constructor(private bookService: BookService) {}

  loadBooks() {
    this.bookService.getBooks()
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
    this.bookService.changeOrderDate(book, orderDate)
      .subscribe((data) => {
        console.log(data);
      });
  }

  cancelOrderDate(book: Book) {
    const orderDate = '';
    this.bookService.changeOrderDate(book, orderDate)
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
