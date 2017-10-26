import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "ma-toolbar",
  templateUrl: "./ma-toolbar.component.html",
  styleUrls: ["./ma-toolbar.component.scss"]
})
export class MaToolbarComponent {
  @Output() menuClick: EventEmitter<any> = new EventEmitter();

  handleClick() {
    this.menuClick.emit(null);
  }
}
