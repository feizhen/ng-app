import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './main/error/page-not-found.component';
import { GroupToolComponent } from './main/group-tool/group-tool.component';

const appRoutes: Routes = [
  {
    path: 'group-tool',
    component: GroupToolComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }

