import { NgModule } from '@angular/core';

// 加载开发的核心模块
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';

// 加载开发的服务
import { 
  AuthenticationService,
  UserService,
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
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})

export class MainModule { }