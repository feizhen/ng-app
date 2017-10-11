import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { MaLayoutModule } from '../../core/ma-layout/ma-layout.module';

import { AdminComponent } from './admin.component';
import { AdminUserComponent } from './admin-user/admin-user.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminUserComponent,
  ],
  imports: [
    AdminRoutingModule,
    MaLayoutModule,
  ]
})

export class AdminModule { }