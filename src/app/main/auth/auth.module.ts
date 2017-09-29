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

import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdCardModule,
    MdGridListModule,
    MdInputModule,
    MdCheckboxModule,
    MdButtonModule,
    MatProgressSpinnerModule,
    AuthRoutingModule,
  ]
})

export class AuthModule { }