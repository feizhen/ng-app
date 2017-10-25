import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "ma-sidenav",
  templateUrl: "./ma-sidenav.component.html",
  styleUrls: ["./ma-sidenav.component.css"]
})
export class MaSidenavComponent implements OnInit {
  @Input() isOpen: boolean;
  @Input() items: Array<any>;

  ngOnInit() {}
}
