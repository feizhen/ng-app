import { NgModule } from "@angular/core";
import { AdminRoutingModule } from "./admin-routing.module";
import { MaLayoutModule } from "../../components/Layout/ma-layout.module";

import { AdminUserComponent } from "./admin-user/admin-user.component";
import { AdminSystemComponent } from "./admin-system/admin-system.component";
import { AdminComponent } from "./admin.component";

@NgModule({
  declarations: [AdminComponent, AdminUserComponent, AdminSystemComponent],
  imports: [AdminRoutingModule, MaLayoutModule]
})
export class AdminModule {}
