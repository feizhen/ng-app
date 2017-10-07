import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { MethodService } from '../services';

@Component({
  templateUrl: './admin.component.html',
  // 一旦提供了providers就取不到了
  // providers: [MethodService]
})

export class AdminComponent implements OnInit { 
  private adminUser;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private method: MethodService
  ) { }

  ngOnInit() {
    this.method.testMethod(); // 测试成功，可以获取到在登录时设置的token
  }
}