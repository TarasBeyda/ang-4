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
  selectedUser = '';

  users = [
    {
      userName: 'Valeria Liberty',
      address: 'Address1, Address2, Town, Country, Postcode',
      nickName: 'Peldi',
      email: 'test@testing.com',
      roles: 'Admin',
      modules: 'Track/Trace',
      customers: 4,
      created: '15/01/17'
    },
    {
      userName: 'Valeria Liberty',
      address: 'Address1, Address2, Town, Country, Postcode',
      nickName: 'Peldi',
      email: 'test@testing.com',
      roles: 'Admin',
      modules: 'Track/Trace',
      customers: 4,
      created: '15/01/17'
    },
    {
      userName: 'Valeria Liberty',
      address: 'Address1, Address2, Town, Country, Postcode',
      nickName: 'Peldi',
      email: 'test@testing.com',
      roles: 'Admin',
      modules: 'Track/Trace',
      customers: 4,
      created: '15/01/17'
    },
    {
      userName: 'Valeria Liberty',
      address: 'Address1, Address2, Town, Country, Postcode',
      nickName: 'Peldi',
      email: 'test@testing.com',
      roles: 'Admin',
      modules: 'Track/Trace',
      customers: 4,
      created: '15/01/17'
    }
  ];

  selectUser(user: any) {
    this.selectedUser = user;
  }

  roles = [
    {value: 'role-1', viewValue: 'Role 1'},
    {value: 'role-2', viewValue: 'Role 2'},
    {value: 'role-3', viewValue: 'Role 3'}
  ];
}
