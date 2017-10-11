import { NgModule } from '@angular/core';
import { MaHeaderModule } from '../ma-header/ma-header.module';
import { MaSidenavModule } from '../ma-sidenav/ma-sidenav.module';
 
import { MaLayoutComponent } from './ma-layout.component';

@NgModule({
  declarations: [
    MaLayoutComponent,
  ],
  imports: [
    MaHeaderModule,
    MaSidenavModule,
  ],
  exports: [
    MaLayoutComponent,
  ]
})

export class MaLayoutModule { }