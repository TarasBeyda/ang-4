import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'view-vehicles-app',
  templateUrl: `view-vehicles.html`,
  styleUrls: ['/src/style.css'],
})

export class ViewVehiclesComponent {
  roles = [
    {value: 'role-1', viewValue: 'Role 1'},
    {value: 'role-2', viewValue: 'Role 2'},
    {value: 'role-3', viewValue: 'Role 3'}
  ];
}
