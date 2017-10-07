import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { UserService } from '../services';

@Component({
  templateUrl: './admin.component.html',
})

export class AdminComponent implements OnInit { 
  private adminUser;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getAllUsers()
      .subscribe(
        response => {
          console.log(response);
        },
        err => {
          console.log(err);
        }
      )
  }
}