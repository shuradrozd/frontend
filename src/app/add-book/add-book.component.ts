import {Component, Input} from '@angular/core';
import {BooksService} from '../books.service';
import {Book} from '../interfaces/book';



@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})


export class AddBookComponent {
  bookName = '';
  constructor(private booksService: BooksService) {}

  addBook() {
    this.booksService
      .addBook(this.bookName)
      .subscribe((book: Book) => {
      });
    this.bookName = '';

  }

}
