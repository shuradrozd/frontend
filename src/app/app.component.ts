import {Component, OnInit} from '@angular/core';
import {BooksService} from './books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  appTitle: any;

  constructor(private booksService: BooksService) {}

  ngOnInit() {
    this.appTitle = this.booksService.getTitle();
  }

}
