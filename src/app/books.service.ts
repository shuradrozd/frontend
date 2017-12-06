import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Book} from './interfaces/book';

@Injectable()
export class BooksService {

  books: Book[] = [];

  constructor(private http: Http) {}

  getBooks() {
    return this.http.get('http://localhost:3000/books')
      .map((response: Response) => response.json())
      .do((books) => {
      this.books = books;
      // console.log(this.books);
      });
  }

  addBook(bookName: string) {
    const book = {
      index: '1000',
      author: 'test',
      name: bookName,
      orderDate: '',
      user: ''
    };

    return this.http.post('http://localhost:3000/books', book)
      .map((response: Response) => response.json())
      .do((item_book: Book) => {
        this.books.push(item_book);
      });
  }

  changeOrderDate(book: Book, orderDate: string) {
    book.orderDate = orderDate;
    return this.http.put(`http://localhost:3000/books/${book.id}`, book)
      .map((response: Response) => response.json());
  }

  deleteOrderDate(book: Book, orderDate: string) {
    book.orderDate = orderDate;
    return this.http.put(`http://localhost:3000/books/${book.id}`, book)
      .map((response: Response) => response.json());
  }
}
