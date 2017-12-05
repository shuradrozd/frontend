import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable()
export class BooksService {

  constructor(private http: Http) { }

  getBooks() {
    return this.http.get('http://localhost:3000/books')
      .map((response: Response) => response.json());
  }

}
