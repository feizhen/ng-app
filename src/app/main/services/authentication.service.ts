import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { LoginForm } from '../auth/login.component';

@Injectable()

export class AuthenticationService {
  constructor(private http: Http) { }

  login(loginForm: LoginForm) {
    return this.http.post('/api/auth/login', loginForm);
  }

  logout() {
    console.log('use logout')
  }
}