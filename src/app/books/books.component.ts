import { Component, OnInit } from '@angular/core';
import {User} from "../general/models/user.model";


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  curDate  = new Date();
  curUser: User = JSON.parse(window.localStorage.getItem('user'));

  constructor() { }
  ngOnInit() {
    // console.log(currentUser.name);
  }

}
