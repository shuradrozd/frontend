import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Book} from './interfaces/book';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BooksService {

  books: Book[] = [];

  constructor(private http: Http) {}

  getTitle() {
    return this.http.get('http://localhost:3000/title')
      .delay(500)
      .map((response: Response) => response.json())
      .map((data) => data.value);
 }

  getBooks() {
    return this.http.get('http://localhost:3000/books')
      .map((response: Response) => response.json())
      .catch((error: Response) => {
        return Observable.throw('Server is not accessible. Try later.');
      })
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

}
