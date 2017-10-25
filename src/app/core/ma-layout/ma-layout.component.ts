import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "ma-layout",
  templateUrl: "./ma-layout.component.html"
})
export class MaLayoutComponent implements OnInit {
  public open: boolean;
  @Input() items: Array<any>;

  ngOnInit() {
    this.open = true;
  }

  toggleSidenav() {
    this.open = !this.open;
  }
}
