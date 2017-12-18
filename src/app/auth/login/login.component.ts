import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {UsersService} from '../../general/services/users.service';
import {User} from '../../general/models/user.model';
import {Message} from '../../general/models/message.model';
import {AuthService} from '../../general/services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  message: Message;

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.message = new Message('danger', '');
    this.route.queryParams
  .subscribe((params: Params) => {
        if (params['nowCanLogin']) {
          this.showMessage({
           text: 'Now you can login',
           type: 'success'
         });
        }
      });
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });

  }

  private showMessage({text, type}: Message) {
    this.message = new Message(type, text);
    window.setTimeout(() => {
      this.message.text = '';
    }, 5000);
  }

  onSubmit() {
    const formData = this.form.value;

    this.usersService.getUserByEmail(formData.email)
      .subscribe((user: User) => {
        if (user) {
          if (user.password === formData.password) {
            this.message.text = '';
            window.localStorage.setItem('user', JSON.stringify(user));
            this.authService.login();
            this.router.navigate(['/books/findBooks']);
          } else {
            this.showMessage({
              text: 'Please enter correct password',
              type: 'danger'});
          }
        } else {
          this.showMessage({
            text: 'This user doesn\'t exist',
            type: 'danger'
          });
        }
      });
  }
}
