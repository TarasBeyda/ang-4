import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'view-customers-app',
  templateUrl: `view-customers.html`,
  styleUrls: ['/src/style.css'],
})

export class ViewCustomersComponent {
  checked = false;

  roles = [
    {value: 'role-1', viewValue: 'Role 1'},
    {value: 'role-2', viewValue: 'Role 2'},
    {value: 'role-3', viewValue: 'Role 3'}
  ];
}
