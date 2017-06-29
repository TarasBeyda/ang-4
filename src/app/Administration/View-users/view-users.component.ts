import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'view-users-app',
  templateUrl: `view-users.html`,
  styleUrls: ['/src/style.css'],
})

export class ViewUsersComponent {
  checked = false;

  roles = [
    {value: 'role-1', viewValue: 'Role 1'},
    {value: 'role-2', viewValue: 'Role 2'},
    {value: 'role-3', viewValue: 'Role 3'}
  ];
}
