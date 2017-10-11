import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { MaLayoutModule } from '../../core/ma-layout/ma-layout.module';

import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    AdminRoutingModule,
    MaLayoutModule,
  ]
})

export class AdminModule { }