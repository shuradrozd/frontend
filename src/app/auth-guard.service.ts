import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot
} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthServiceOld} from './auth.service';
import {Injectable} from '@angular/core';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthServiceOld) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.auth.isAuth()
      .then((isLoggedIn: boolean) => {
      if (isLoggedIn) {
        return true;
      }
      return false;
      });
  }


}
