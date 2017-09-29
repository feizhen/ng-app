import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { 
  MdCardModule,
  MdGridListModule,
  MdInputModule,
  MdCheckboxModule,
  MdButtonModule,
  MatProgressSpinnerModule
} from '@angular/material';

import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MdCardModule,
    MdGridListModule,
    MdInputModule,
    MdCheckboxModule,
    MdButtonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    LoginComponent
  ]
})

export class AuthModule { }