import { NgModule } from '@angular/core';

import { MaHeaderModule } from './ma-header/ma-header.module';
import { MaSidenavModule } from './ma-sidenav/ma-sidenav.module';
import { MaLayoutModule } from './ma-layout/ma-layout.module';

@NgModule({
  imports: [
    MaHeaderModule,
    MaSidenavModule,
    MaLayoutModule,
  ]
})

export class CoreModule { }