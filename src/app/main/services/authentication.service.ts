import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { LoginUser } from '../models/LoginUser';

@Injectable()

export class AuthenticationService {
  constructor(private http: Http) { }

  login(user: LoginUser) {
    console.log('login user info:', user)
    return this.http.get('/api').subscribe(data => {
      console.log('response:', data)
    })
  }

  logout() {
    console.log('use logout')
  }
}