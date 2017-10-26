import { Component, Input, OnInit } from "@angular/core";

import { SidenavItem } from "../../../models/sidnav-item";

@Component({
  selector: "sub-item",
  templateUrl: "./sub-item.component.html",
  styleUrls: ["./sub-item.component.scss"]
})
export class SubItemComponent implements OnInit {
  private activatedColor;
  @Input() item: SidenavItem;
  ngOnInit() {
    this.activatedColor = "warn";
  }
}
