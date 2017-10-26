import { NgModule } from "@angular/core";
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin.component";
import { MaLayoutModule } from "../../components/Layout/ma-layout.module";

@NgModule({
  declarations: [AdminComponent],
  imports: [AdminRoutingModule, MaLayoutModule]
})
export class AdminModule {}
