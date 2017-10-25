import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "ma-header",
  templateUrl: "./ma-header.component.html",
  styleUrls: ["./ma-header.component.css"]
})
export class MaHeaderComponent {
  @Output() menuClick: EventEmitter<any> = new EventEmitter();

  handleClick() {
    this.menuClick.emit(null);
  }
}
