import { Component, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { AuthService } from "../../api-service/methods/auth.service";
import { LoginForm, LoginFormState } from "../../models/login";

import md5 from "md5";

@Component({
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  loginForm: LoginForm = {
    username: "",
    password: ""
  };
  state: LoginFormState = {
    text: "用户登录",
    loading: false,
    success: true,
    btnText: "登录"
  };
  // 表单校验
  usernameFormControl = new FormControl(this.loginForm.username, [
    Validators.required
  ]);
  passwordFormControl = new FormControl(this.loginForm.password, [
    Validators.required
  ]);
  constructor(private authService: AuthService) {}

  loginSuccess(response): void {
    this.state.text = "用户登录";
    this.state.loading = false;
    this.state.success = true;
    this.state.btnText = "登录";
    // 路由跳转...
  }

  loginFail(err): void {
    this.state.text = err;
    this.state.loading = false;
    this.state.success = false;
    this.state.btnText = "登录";
  }

  handleKeyup(event): void {
    if (event.code === "Enter" && !this.state.loading) {
      this.handleLogin();
    }
  }

  handleLogin(): void {
    const username = this.loginForm.username;
    const password = md5(this.loginForm.password);
    this.state.loading = true;
    this.state.btnText = "登录中";
    setTimeout(() => {
      this.authService
        .login({
          username: username,
          password: password
        })
        .then(this.loginSuccess.bind(this))
        .catch(this.loginFail.bind(this));
    }, 2000);
  }
}
