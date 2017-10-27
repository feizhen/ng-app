import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LoginForm, LoginResponse } from "../../models/login";
import { CurrentUser } from "../../models/user";

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}
  login(loginForm: LoginForm): Promise<any> {
    const p = new Promise((resolve, reject) => {
      this.http.post<LoginResponse>("/api/auth/login", loginForm).subscribe(
        response => {
          localStorage.setItem("currentUser", JSON.stringify(response));
          localStorage.setItem("accessToken", response.accessToken);
          resolve(response);
        },
        err => {
          switch (err.status) {
            case 401:
              reject("密码错误 ");
              break;
            case 404:
              reject("用户名不存在");
            default:
              reject("登录错误");
              break;
          }
        }
      );
    });
    return p;
  }
  getCurrentUser(): CurrentUser {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    user.avatar = '../../../assets/images/avatar.jpg';
    return user;
  }
}
