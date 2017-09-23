import { NgModule } from '@angular/core';

import { AuthModule } from './auth/auth.module';
import { ErrorModule } from './error/error.module';

@NgModule({
  imports: [
    AuthModule,
    ErrorModule,
  ],
  exports: [
    AuthModule,
    ErrorModule,
  ]
})

export class MainModule { }