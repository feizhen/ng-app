import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material';

import { MaSidenavComponent } from './ma-sidenav.component';

@NgModule({
  declarations: [
    MaSidenavComponent
  ],
  imports: [
    MatSidenavModule,
  ],
  exports: [
    MaSidenavComponent,
  ]
})

export class MaSidenavModule {

}