import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    FormsModule,
  ],
  exports: [
    LoginComponent
  ]
})

export class AuthModule { }