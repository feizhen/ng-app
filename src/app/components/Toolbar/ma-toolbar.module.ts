import { NgModule } from "@angular/core";
import { MatToolbarModule, MatButtonModule } from "@angular/material";

import { MaToolbarComponent } from "./ma-toolbar.component";

@NgModule({
  declarations: [MaToolbarComponent],
  imports: [MatToolbarModule, MatButtonModule],
  exports: [MaToolbarComponent]
})
export class MaToolbarModule {}
