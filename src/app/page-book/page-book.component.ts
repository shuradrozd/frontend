import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-page-book',
  templateUrl: './page-book.component.html',
  styleUrls: ['./page-book.component.css']
})
export class PageBookComponent implements OnInit {
  index: string;
  author: string;
  name: string;
  orderDate: string;
  user: string;
  id: number;
constructor(private route: ActivatedRoute) {}

ngOnInit() {
  this.id = +this.route.snapshot.params['id'];
  this.index = this.route.snapshot.queryParams['index'];
  this.author = this.route.snapshot.queryParams['author'];
  this.name = this.route.snapshot.queryParams['name'];
  this.orderDate = this.route.snapshot.queryParams['orderDate'];
  this.user = this.route.snapshot.queryParams['user'];
  this.route.queryParams
    .subscribe((params: Params) => {
    this.index = params['index'];
    this.author = params['author'];
    this.name = params['name'];
    this.orderDate = params['orderDate'];
    this.user = params['user'];
    });
}
}
