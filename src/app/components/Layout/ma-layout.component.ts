import { Component, Input, OnInit } from "@angular/core";
import { SidenavItem } from '../../models/sidnav-item';
@Component({
  selector: "ma-layout",
  templateUrl: "./ma-layout.component.html"
})
export class MaLayoutComponent implements OnInit {
  public open: boolean;
  @Input() items: Array<SidenavItem>;

  ngOnInit() {
    this.open = true;
  }

  toggleSidenav() {
    this.open = !this.open;
  }
}
