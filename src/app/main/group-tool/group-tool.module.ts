import { NgModule, OnInit } from '@angular/core';
import { GroupToolComponent } from './group-tool.component';
import { GroupService } from '../services/group.service';

@NgModule({
  declarations: [
    GroupToolComponent,
  ],
  providers: [
    GroupService,
  ]
})

export class GroupToolModule { 
  
}