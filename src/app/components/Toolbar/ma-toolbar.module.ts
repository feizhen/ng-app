import { NgModule } from "@angular/core";
import {
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule
} from "@angular/material";
import { MaToolbarComponent } from "./ma-toolbar.component";
import { AuthService } from "../../api-service/methods/auth.service";

@NgModule({
  declarations: [MaToolbarComponent],
  imports: [MatToolbarModule, MatButtonModule, MatMenuModule],
  providers: [AuthService],
  exports: [MaToolbarComponent]
})
export class MaToolbarModule {}
