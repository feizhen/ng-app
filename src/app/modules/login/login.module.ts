import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MdCardModule,
  MdGridListModule,
  MdInputModule,
  MdCheckboxModule,
  MdButtonModule,
  MatProgressSpinnerModule
} from "@angular/material";

import { AuthService } from "../../api-service/methods/auth.service";
import { LoginComponent } from "./login.component";

const loginRoutes: Routes = [{ path: "login", component: LoginComponent }];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    MdCardModule,
    MdGridListModule,
    MdInputModule,
    MdCheckboxModule,
    MdButtonModule,
    MatProgressSpinnerModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(loginRoutes)
  ],
  providers: [AuthService],
  exports: [RouterModule]
})
export class LoginModule {}
