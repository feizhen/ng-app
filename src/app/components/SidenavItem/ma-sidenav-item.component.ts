import { Component, Input, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";
import { SidenavItem } from "../../models/sidnav-item";

export const EXPANSION_ANIMATION = "225ms cubic-bezier(0.4,0.0,0.2,1)";
@Component({
  selector: "ma-sidenav-item",
  templateUrl: "./ma-sidenav-item.component.html",
  styleUrls: ["./ma-sidenav-item.component.scss"],
  animations: [
    trigger("itemToggle", [
      state("collapsed", style({ height: "0px" })),
      state("expanded", style({ height: "*" })),
      transition("expanded <=> collapsed", animate(EXPANSION_ANIMATION))
    ])
  ]
})
export class MaSidenavItemComponent implements OnInit {
  private isActive: string;
  @Input() item: SidenavItem;

  ngOnInit() {
    this.isActive = this.item.active ? "expanded" : "collapsed";
  }
  toggleItem(): void {
    this.isActive = this.isActive === "expanded" ? "collapsed" : "expanded";
    this.item.active = !this.item.active;
  }
}
