import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'view-vehicle-groups-app',
  templateUrl: `view-vehicle-groups.html`,
  styleUrls: ['/src/style.css'],
})

export class ViewVehicleGroupsComponent {
  checked = false;

  roles = [
    {value: 'role-1', viewValue: 'Role 1'},
    {value: 'role-2', viewValue: 'Role 2'},
    {value: 'role-3', viewValue: 'Role 3'}
  ];
}
