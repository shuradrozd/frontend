import {Component} from '@angular/core';
import {BooksService} from './books.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books = [];
constructor(private booksService: BooksService) {}


loadBooks() {
  this.booksService
    .getBooks()
    .subscribe((response) => {
      console.log(response);
    });
}
}
