import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class UserService {
  // #TODO 应该将id定义为Mongo的ObjectId
  constructor(private http: HttpClient) { }
  getUser(id: String) {
   return  this.http.get('/api/user/id');
  }
}