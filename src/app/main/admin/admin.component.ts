import { Component, OnInit } from "@angular/core";

@Component({
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  private adminSidenavItems;

  ngOnInit() {
    this.adminSidenavItems = [
      {
        type: 'group',
        name: "用户管理",
        open: true,
        icon: "account_box",
        children: [
          {
            name: '全部用户',
            router: '/admin/user'
          }
        ]
      },
      {
        type: 'item',
        name: "系统管理",
        icon: "settings_system_daydream",
        router: "/admin/sys"
      },
      {
        type: 'item',
        name: "分组管理",
        icon: "group",
        router: "/group-tool"
      }
    ];
  }
}
