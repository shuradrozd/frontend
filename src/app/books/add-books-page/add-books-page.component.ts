import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../../general/services/book.service';
import {Book} from '../../general/models/book.model';

@Component({
  selector: 'app-add-books-page',
  templateUrl: './add-books-page.component.html',
  styleUrls: ['./add-books-page.component.css']
})


export class AddBooksPageComponent implements OnInit {
  form: FormGroup;
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.form = new FormGroup({
      'authorName': new FormControl(null, [Validators.required]),
      'bookName': new FormControl(null, [Validators.required]),
    });
  }
  onSubmit() {
    const {authorName, bookName} = this.form.value;
    this.bookService.addBook(authorName, bookName)
      .subscribe((book: Book) => {
        console.log(book);
      });
    this.form.reset();
  }
}


