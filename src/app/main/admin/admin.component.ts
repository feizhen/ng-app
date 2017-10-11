import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import "rxjs/add/operator/switchMap";

import { UserService } from "../services/user.service";

@Component({
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  private open: boolean;
  private adminUser;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.open = true;
    this.userService.getAllUsers().subscribe(
      response => {
        console.log(response);
      },
      err => {
        console.log(err);
      }
    );
  }

  menuClick() {
    this.open = !this.open;
    console.log("menuClick");
  }
}
