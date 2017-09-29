import { NgModule } from '@angular/core';

import { AuthModule } from './auth/auth.module';
import { ErrorModule } from './error/error.module';

import { 
  AuthenticationService,
} from './services/index';

@NgModule({
  imports: [
    AuthModule,
    ErrorModule,
  ],
  exports: [
    AuthModule,
    ErrorModule,
  ],
  providers: [
    AuthenticationService,
  ]
})

export class MainModule { }