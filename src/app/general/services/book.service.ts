import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Book} from '../models/book.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BookService {

  books: Book[] = [];

  constructor(private http: Http) {}

  // getTitle() {
  //   return this.http.get('http://localhost:3000/title')
  //     .delay(500)
  //     .map((response: Response) => response.json())
  //     .map((data) => data.value);
  // }

  // getBooks() {
  //   return this.http.get('http://localhost:3000/books')
  //     .map((response: Response) => response.json())
  //     .catch((error: Response) => {
  //       return Observable.throw('Server is not accessible. Try later.');
  //     })
  //     .do((books) => {
  //       this.books = books;
  //       // console.log(this.books);
  //     });
  // }

  getBooks(bookName: string, authorName: string) {
    return this.http.get(`http://localhost:3000/books`, { params: {'name': bookName, 'author': authorName} })
      .map((response: Response) => response.json())
      .catch((error: Response) => {
        return Observable.throw('Server is not accessible. Try later.');
      });
    // .do((books) => {
    //   this.books = books;
    // });
  }

   // getBooksByName(bookName: string) {
  //   return this.http.get(`http://localhost:3000/books`, { params: {'name': bookName} })
  //     .map((response: Response) => response.json())
  //     .catch((error: Response) => {
  //       return Observable.throw('Server is not accessible. Try later.');
  //     });
      // .do((books) => {
      //   this.books = books;
      // });
  // }

  // getBooksByAuthorName(authorName: string) {
  //   return this.http.get(`http://localhost:3000/books`, { params: {'author': authorName} })
  //     .map((response: Response) => response.json())
  //     .catch((error: Response) => {
  //       return Observable.throw('Server is not accessible. Try later.');
  //     });
  // }

  addBook(bookIndex: number, authorName: string, bookName: string) {
    const book = {
      index: bookIndex,
      author: authorName,
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

  changeOrderDate(book: Book, orderDate: string, user: string) {
    book.orderDate = orderDate;
    book.user = user;
    return this.http.put(`http://localhost:3000/books/$book._id`, book)
      .map((response: Response) => response.json());
  }

}
