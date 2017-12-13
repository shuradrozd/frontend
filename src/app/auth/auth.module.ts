import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthComponent } from './auth.component';
import {AuthRouteModule} from './auth-route.module';
import {GeneralModule} from '../general/general.module';



@NgModule({

  declarations: [
    LoginComponent,
    RegistrationComponent,
    AuthComponent
  ],

  imports: [
    CommonModule,
    AuthRouteModule,
    GeneralModule // common module for forms ad reactiveForms
  ]
})
export class AuthModule { }
