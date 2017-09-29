import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthenticationService } from '../services/index';

import md5 from 'md5';
import _ from 'lodash';

export class LoginForm {
  username: string;
  password: string;
}

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ AuthenticationService ]
})

export class LoginComponent {
  auth = {
    text: '用户登录',
    fail: false
  };
  loading = false;
  loginBtnText = '登录';
  loginForm: LoginForm = {
    username: '',
    password: '',
  };
  usernameFormControl = new FormControl(this.loginForm.username, [
    Validators.required
  ]);
  passwordFormControl = new FormControl(this.loginForm.password, [
    Validators.required
  ]);

  constructor(private authService: AuthenticationService) { }

  handleLogin(): void {
    if (this.usernameFormControl.valid && this.passwordFormControl.valid) {
      this.loading = true;
      this.loginBtnText = '登录中...';
      this.auth.fail = false;
      this.auth.text = '用户登录';
      let username = this.loginForm.username;
      let password_md5 = md5(this.loginForm.password);
      // 用setTimeout来模拟网络延迟
      setTimeout(() => {
        const subscription = this.authService
        .login({
          username: username,
          password: password_md5
        });
        subscription.subscribe(
            sucess => {
              // 登录成功 -> 路由跳转
              this.loading = false;
              this.loginBtnText = '登录';
              this.auth = {
                text: '登录成功',
                fail: false
              };
            },
            err => {
              // 登录失败 -> 提示失败信息
              this.loading = false;
              this.loginBtnText = '登录';
              if (err.status === 404) {
                this.auth = {
                  text: '用户名不存在',
                  fail: true
                }
              } else if (err.status === 401) {
                this.auth = {
                  text: '密码错误',
                  fail: true
                }
              } else {
                this.auth = {
                  text: '登录错误',
                  fail: true
                }
              }
            }
          );
      }, 3000);
    } else {
      this.auth = {
        text: '请填写正确的用户信息',
        fail: true
      }
    }
  }
  handleKeyup(event): void {
    if (event.code === 'Enter' && !this.loading) {
      this.handleLogin();
    }
  } 
}