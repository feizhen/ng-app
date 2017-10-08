import { NgModule } from '@angular/core';

// 加载开发的核心模块
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { GroupToolModule } from './group-tool/group-tool.module';
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
    GroupToolModule,
  ],
  exports: [
    AuthModule,
    AdminModule,
    GroupToolModule,
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