import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ILocalUser } from '../models/local-user';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private _router: Router) {

  }
  canActivate(): boolean {
    const item = localStorage.getItem('user');
    if (!item) {
      this._router.navigate(['']);
      return false;
    }
    const userInfo = <ILocalUser>JSON.parse(item);

    const date = (new Date().getTime()) / 1000;
    if (userInfo.expireTime && userInfo.expireTime > date) {
      return true;
    }
    this._router.navigate(['']);
  }
}
