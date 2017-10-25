import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatSidenavModule } from "@angular/material";

import { MaSidenavItemModule } from "./item/ma-sidenav-item.module";
import { MaSidenavComponent } from "./ma-sidenav.component";
import { MaSidenavItemComponent } from "./item/ma-sidenav-item.component";

@NgModule({
  declarations: [MaSidenavComponent],
  imports: [CommonModule, MaSidenavItemModule, MatSidenavModule],
  exports: [MaSidenavComponent]
})
export class MaSidenavModule {}
