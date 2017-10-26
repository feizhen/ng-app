import { Component, Input, OnInit } from "@angular/core";
import { SidenavItem } from "../../models/sidnav-item";

@Component({
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"]
})
export class AdminComponent implements OnInit {
  private items: Array<SidenavItem>;
  ngOnInit() {
    this.items = [
      {
        type: "group",
        name: "用户管理",
        icon: "group",
        children: [
          {
            type: "item",
            name: "学生用户",
            icon: "book"
          },
          {
            type: "item",
            name: "教师用户",
            icon: "work"
          }
        ]
      },
      {
        type: "group",
        name: "系统管理",
        icon: "settings_system_daydream"
      }
    ];
  }
}
