import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class LoginService {

  private _loginUrl = `${environment.baseApiEndPoint}/user/login`;

  constructor(private _http: Http) { }

  login(request: User): Observable<boolean> {
    return this._http.post(this._loginUrl, request)
      .map(m => <boolean>m.json())
      .do(data => console.log('User/Login: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json() || 'Server error');
  }
}
