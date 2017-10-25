import { Component, Input, OnInit } from "@angular/core";

interface Item {
  type: string; // 类型 group, item
  name: string;
  open?: boolean;
  icon?: string;
  router?: string;
  clickFn?: Function;
  children?: Array<any>;
}

@Component({
  selector: "ma-sidenav-item",
  templateUrl: "./ma-sidenav-item.component.html",
  styleUrls: ["./ma-sidenav-item.component.css"]
})
export class MaSidenavItemComponent implements OnInit {
  @Input() item: Item;
  ngOnInit() {}
}
