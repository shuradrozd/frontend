import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../general/services/users.service';
import {User} from '../../general/models/user.model';
import {Router} from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;
  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this)),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'name': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'agree': new FormControl(false, [Validators.requiredTrue])
    });
  }

  onSubmit() {
    const {email, password, name} = this.form.value;
    const user = new User(email, password, name);
    console.log(this.form);
    this.userService.addNewUser(user)
      .subscribe(() => {});
    this.router.navigate(['/login'], {
      queryParams: {nowCanLogin: true}
    });

    }
  forbiddenEmails(control: FormControl): Promise <any> {
    return new Promise((resolve, reject) => {
      this.userService.getUserByEmail(control.value)
        .subscribe((user: User) => {
        if (user) {
          resolve({forbiddenEmail: true});
        } else {
          resolve(null);
        }
        });
    });
  }

}
