import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material";
import { MaSidenavItemComponent } from "./ma-sidenav-item.component";
import { ItemContentComponent } from "./item-content.component";

@NgModule({
  declarations: [MaSidenavItemComponent, ItemContentComponent],
  imports: [CommonModule, MatButtonModule, RouterModule],
  exports: [MaSidenavItemComponent]
})
export class MaSidenavItemModule {}
