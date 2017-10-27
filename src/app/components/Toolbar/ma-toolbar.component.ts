import { Component, EventEmitter, Output, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";
import { AuthService } from "../../api-service/methods/auth.service";
export const ICON_ANIMATION = "225ms";
@Component({
  selector: "ma-toolbar",
  templateUrl: "./ma-toolbar.component.html",
  styleUrls: ["./ma-toolbar.component.scss"],
  animations: [
    trigger("iconState", [
      state("collapsed", style({ transform: "rotate(-90deg)" })),
      state("expanded", style({ transform: "rotate(0)" })),
      transition("expanded <=> collapsed", animate(ICON_ANIMATION))
    ])
  ]
})
export class MaToolbarComponent implements OnInit {
  private isOpen: string;
  private user: object;
  @Output() menuClick: EventEmitter<any> = new EventEmitter();
  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.isOpen = "expanded";
    this.user = this.authService.getCurrentUser();
  }
  handleClick() {
    this.isOpen = this.isOpen === "expanded" ? "collapsed" : "expanded";
    this.menuClick.emit(null);
  }
}
