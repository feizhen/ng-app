import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ma-layout',
  templateUrl: './ma-layout.component.html'
})

export class MaLayoutComponent implements OnInit{
  open: boolean;

  ngOnInit() {
    this.open = true;
  }

  toggleSidenav() {
    this.open = !this.open;
  }
}