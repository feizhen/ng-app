import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { 
  AuthenticationService,
} from '../../services/authentication.service';

import md5 from 'md5';
import _ from 'lodash';

export class LoginForm {
  username: string;
  password: string;
}

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  auth = {
    text: '用户登录',
    success: true
  };
  loading = false;
  loginBtnText = '登录';
  loginForm: LoginForm = {
    username: '',
    password: '',
  };
  // 表单校验
  usernameFormControl = new FormControl(this.loginForm.username, [
    Validators.required
  ]);
  passwordFormControl = new FormControl(this.loginForm.password, [
    Validators.required
  ]);

  constructor(
    private authService: AuthenticationService,
    private router: Router,
  ) { }

  setLoadingState(loading: boolean, isSuccess: boolean, authMsg: string): void {
    if (loading) {
      this.loading = loading;
      this.loginBtnText = '登录中...';
      this.auth = {
        text: '用户',
        success: isSuccess
      }
    } else {
      this.loading = loading;
      this.loginBtnText = '登录';
      this.auth = {
        text: authMsg,
        success: isSuccess
      }
    }
  }

  handleLogin(): void {
    const LOADED = false;
    const LOADING = true;
    const FAIL = false;
    const SUCCESS = true;
    if (this.usernameFormControl.valid && this.passwordFormControl.valid) {
      this.setLoadingState(LOADING, SUCCESS, '登录中...');
      let username = this.loginForm.username;
      let password_md5 = md5(this.loginForm.password);
      // 用setTimeout来模拟网络延迟
      setTimeout(() => {
        const subscription = this.authService
          .login({
            username: username,
            password: password_md5
          });
        subscription
          .subscribe(
            response => {
              this.setLoadingState(LOADED, SUCCESS, '登录成功');

              localStorage.setItem('token', response.token);
              localStorage.setItem('currentUser', JSON.stringify(response));

              // 登录成功 -> 路由跳转
              this.router.navigate(['/admin/user']);
            },
            err => {
              console.log(err);
              // 登录失败 -> 提示失败信息
              if (err.status === 404) {
                this.setLoadingState(LOADED, FAIL, '用户名不存在');
              } else if (err.status === 401) {
                this.setLoadingState(LOADED, FAIL, '密码错误');
              } else {
                this.setLoadingState(LOADED, FAIL, '登录错误');
              }
            }
          );
      }, 2000);
    } else {
      this.setLoadingState(LOADED, FAIL, '请填写正确的用户信息');
    }
  }
  handleKeyup(event): void {
    if (event.code === 'Enter' && !this.loading) {
      this.handleLogin();
    }
  } 
}