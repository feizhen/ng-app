import { NgModule } from '@angular/core';
import { 
  MdCardModule,
  MdGridListModule,
  MdInputModule,
  MdCheckboxModule,
  MdButtonModule
} from '@angular/material';

import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    MdCardModule,
    MdGridListModule,
    MdInputModule,
    MdCheckboxModule,
    MdButtonModule,
  ],
  exports: [
    LoginComponent
  ]
})

export class AuthModule { }