import { Component, Input, OnInit } from "@angular/core";
import { SidenavItem } from '../../models/sidnav-item';

@Component({
  selector: "ma-sidenav",
  templateUrl: "./ma-sidenav.component.html",
  styleUrls: ["./ma-sidenav.component.scss"]
})
export class MaSidenavComponent implements OnInit {
  @Input() isOpen: boolean;
  @Input() items: Array<SidenavItem>;

  ngOnInit() {}
}
