import { Component, OnInit } from '@angular/core';
import { GroupService } from '../services/group.service';

@Component({
  templateUrl: './group-tool.component.html',
  styleUrls: ['./group-tool.component.css']
})

export class GroupToolComponent implements OnInit { 

  constructor(private groupService: GroupService) { }

  ngOnInit() {
    this.groupService.getAllTempUsers()
      .subscribe(
        response => {
          console.log(response);
        },
        err => {
          console.error(err);
        }
      )
  }
}