import { Component } from '@angular/core';
import { LoginUser } from '../models/LoginUser';
import { AuthenticationService } from '../services/index';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ AuthenticationService ]
})

export class LoginComponent {
  user: LoginUser = {
    username: '',
    password: '',
  };
  constructor(private authService: AuthenticationService) { }
  handleLogin(): void {
    this.authService.login(this.user);
  }
  onBlur(val: string): string {
    console.log(val)
    return val ? '' : `${val}不能为空`;
  }
}