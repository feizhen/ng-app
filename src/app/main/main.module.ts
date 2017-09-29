import { NgModule } from '@angular/core';

// 加载开发的核心模块
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';

// 加载开发的服务
import { 
  AuthenticationService,
} from './services';

@NgModule({
  imports: [
    AuthModule,
    AdminModule,
  ],
  exports: [
    AuthModule,
    AdminModule,
  ],
  providers: [
    AuthenticationService,
  ]
})

export class MainModule { }