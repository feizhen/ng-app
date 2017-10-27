import { Component, Input, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";
import { SidenavItem } from "../../../models/sidnav-item";
export const ICON_CHANGE_ANIMATION = "225ms";
@Component({
  selector: "sub-item",
  templateUrl: "./sub-item.component.html",
  styleUrls: ["./sub-item.component.scss"],
  animations: [
    trigger("iconState", [
      state("collapsed", style({ transform: "rotate(0)" })),
      state("expanded", style({ transform: "rotate(90deg) " })),
      transition("expanded <=> collapsed", animate(ICON_CHANGE_ANIMATION))
    ])
  ]
})
export class SubItemComponent {
  @Input() item: SidenavItem;
}
