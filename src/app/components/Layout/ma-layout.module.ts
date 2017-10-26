import { NgModule } from "@angular/core";
import { MaSidenavModule } from "../Sidenav/ma-sidenav.module";
import { MaToolbarModule } from "../Toolbar/ma-toolbar.module";

import { MaLayoutComponent } from "./ma-layout.component";

@NgModule({
  declarations: [MaLayoutComponent],
  imports: [MaSidenavModule, MaToolbarModule],
  exports: [MaLayoutComponent]
})
export class MaLayoutModule {}
