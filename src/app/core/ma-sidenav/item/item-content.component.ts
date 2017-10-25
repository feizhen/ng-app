import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "item-content",
  templateUrl: "./item-content.component.html",
  styleUrls: ["./item-content.component.css"]
})
export class ItemContentComponent implements OnInit {
  private activedColor;
  @Input() item: object;
  ngOnInit() {
    this.activedColor = "warn";
  }
}
