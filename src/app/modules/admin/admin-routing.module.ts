import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AdminComponent } from "./admin.component";
import { AdminUserComponent } from "./admin-user/admin-user.component";
import { AdminSystemComponent } from './admin-system/admin-system.component';

const adminRoutes: Routes = [
  { 
    path: "admin", 
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/admin/user',
        pathMatch: 'full'
      },
      {
        path: 'user',
        component: AdminUserComponent
      },
      {
        path: 'system',
        component: AdminSystemComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
