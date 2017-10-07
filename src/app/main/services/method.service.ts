import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
// const METHODS = ['request', 'delete', 'get', 'put', 'post', '']
export class MethodService implements OnInit {
  private token;
  constructor(
    private http: HttpClient
  ) { }
  ngOnInit() {
    console.log(this.http);
  }
  setAccessToken(token: string) {
    // 页面刷新时数据会丢失，需要存在浏览器本地
    window.localStorage.setItem('token', token);
    this.token = token;
  }
  getAccessToken(): string {
    if (this.token) {
      return this.token;
    } else if (window.localStorage.getItem('token')) {
      return window.localStorage.getItem('token');
    }
    return '';
  }
  testMethod() {
    console.log('global token?', this.getAccessToken());
  }
}