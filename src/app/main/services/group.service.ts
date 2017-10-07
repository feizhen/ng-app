import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class tempUser {
  realname: string;
  sid: string;
}
@Injectable()

export class GroupService {
  constructor(private http: HttpClient) { }

  insertOneTempUser (tempUser: tempUser) {
    return this.http.post('/api/tempUser/insertOne', tempUser);
  }

  getAllTempUsers () {
    return this.http.get('/api/tempUser/all');
  }
}