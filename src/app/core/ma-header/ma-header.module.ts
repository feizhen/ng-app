import { NgModule } from "@angular/core";
import { MatToolbarModule, MatButtonModule } from "@angular/material";

import { MaHeaderComponent } from "./ma-header.component";

@NgModule({
  declarations: [MaHeaderComponent],
  imports: [MatToolbarModule, MatButtonModule],
  exports: [MaHeaderComponent]
})
export class MaHeaderModule {}
