import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginModel: User = new User();
  constructor(private _loginService: LoginService, private _router: Router) { }

  ngOnInit() {
  }

  login(): void {
    this._loginService.login(this.loginModel)
      .subscribe(isSuccess => {
        if (!isSuccess) {
          alert('Kullanıcı Adı veya şifre hatalıdır');
          return;
        }
        const d = (+Date.now() / 1000) + 60 * 60;
        localStorage.setItem('user', JSON.stringify({
          userName: this.loginModel.UserName,
          expireTime: d
        }));
        this._router.navigate(['blog/post-list']);
      }, e => {
        alert('Service Error');
      });
  }
}
