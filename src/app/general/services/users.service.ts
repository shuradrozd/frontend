import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable()
export class UsersService {
  constructor(private http: Http) {}
    getUsers() {
      return this.http.get('http://localhost:3000/users')
      .map((response: Response) => response.json());


    }

}
