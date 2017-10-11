import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginForm } from '../auth/login/login.component';

interface LoginResponse {
  _id: string,
  username: string,
  realname: string,
  token: string,
  role: Array<string>
}

@Injectable()

export class AuthenticationService {
  constructor(
    private http: HttpClient
  ) { }

  login(loginForm: LoginForm) {
    return this.http.post<LoginResponse>('/api/auth/login', loginForm);
  }

  logout() {
    window.localStorage.removeItem('token');
  }
}