import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UserResponse {
  _id: string,
  username: string,
  realname: string,
  token: string,
  role: Array<string>
}

interface AllUsersResponse {
  users: Array<object>
}

@Injectable()

export class UserService {
  // #TODO 应该将id定义为Mongo的ObjectId
  constructor(private http: HttpClient) { }
  getUser(id: string) {
   return this.http.get<UserResponse>('/api/user/id');
  }
  getAllUsers() {
    return this.http.get<AllUsersResponse>('/api/user/all');
  }
}