import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatSidenavModule } from "@angular/material";

import { MaSidenavItemModule } from '../SidenavItem/ma-sidenav-item.module';
import { MaSidenavComponent } from "./ma-sidenav.component";

@NgModule({
  declarations: [MaSidenavComponent],
  imports: [CommonModule, MaSidenavItemModule, MatSidenavModule],
  exports: [MaSidenavComponent]
})
export class MaSidenavModule {}
