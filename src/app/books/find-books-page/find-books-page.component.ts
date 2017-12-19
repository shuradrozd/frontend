import {Component, OnInit} from '@angular/core';
import { Book } from '../../general/models/book.model';
import {BookService} from '../../general/services/book.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../general/models/user.model';

@Component({
  selector: 'app-find-books-page',
  templateUrl: './find-books-page.component.html',
  styleUrls: ['./find-books-page.component.css']
})
export class FindBooksPageComponent implements OnInit {
  form: FormGroup;
  books: Book[] = [];
  searchString = '';
  searchFieldName = '';
  searchParam = false;
  detailParam = false;
  curUser: User = JSON.parse(window.localStorage.getItem('user'));

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.form = new FormGroup(
      {'searchValue': new FormControl(null, [Validators.required]),
      'search': new FormControl(null, [Validators.required]),
      'library': new FormControl(null, [Validators.required])
    });
  }

  changeDetailParam() {
    this.detailParam = true;
  }
  refreshParams() {
    this.detailParam = false;
    this.searchParam = false;
  }
  loadBooks() {
    this.searchParam = true;
     // const {library} = this.form.value;
     // console.log(library);
    this.bookService.getBooks()
      .subscribe(
        (books: Book[]) => {
          this.books = books;
        }, (error) => {
          console.log(error);
        });
  }

  onChangeStatus(book: Book, user) {
    if (this.checkOrderDate(book.orderDate)) {
      this.cancelOrderDate(book);
    } else {
      this.setOrderDate(book, user);
    }
  }

  setOrderDate(book: Book, user) {
    const orderDate = new Date().toDateString();
    this.bookService.changeOrderDate(book, orderDate, user)
      .subscribe((data) => {
        console.log(data);
      });
  }

  cancelOrderDate(book: Book) {
    const orderDate = '';
    const user = '';
    this.bookService.changeOrderDate(book, orderDate, user)
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
