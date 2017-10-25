import { NgModule } from "@angular/core";

import { AdminRoutingModule } from "./admin-routing.module";
import { MaLayoutModule } from "../../core/ma-layout/ma-layout.module";

import { AdminComponent } from "./admin.component";
import { AdminUserComponent } from "./admin-user/admin-user.component";
import { AdminSysComponent } from "./admin-sys/admin-sys.component";

@NgModule({
  declarations: [AdminComponent, AdminUserComponent, AdminSysComponent],
  imports: [AdminRoutingModule, MaLayoutModule]
})
export class AdminModule {}
