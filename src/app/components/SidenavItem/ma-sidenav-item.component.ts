import { Component, Input } from "@angular/core";
import { SidenavItem } from '../../models/sidnav-item';

@Component({
  selector: "ma-sidenav-item",
  templateUrl: "./ma-sidenav-item.component.html",
  styleUrls: ["./ma-sidenav-item.component.scss"]
})
export class MaSidenavItemComponent {
  @Input() item: SidenavItem;
}
