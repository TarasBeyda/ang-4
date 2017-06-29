import {NgModule} from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login.component';
import { HomeComponent } from './Home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { AdministrationComponent } from './Administration/administration.component';
import { PreferenceComponent } from './Administration/User-preference/preference.component';
import { ChangePasswordComponent } from './Administration/Change-password/change-password.component';
import { ViewUsersComponent } from './Administration/View-users/view-users.component';
import { ViewCustomersComponent } from './Administration/View-customers/view-customers.component';
import { ViewVehiclesComponent } from './Administration/View-vehicles/view-vehicles.component';
import { ViewVehicleGroupsComponent } from './Administration/View-vehicle-groups/view-vehicle-groups.component';

import { HeaderComponent } from './Header/header.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'administration',
    component: AdministrationComponent,
    children: [
      { path: '', redirectTo: 'user-preferences', pathMatch: 'full'},
      { path: 'user-preferences', component: PreferenceComponent },
      { path: 'change-password', component: ChangePasswordComponent },
      { path: 'view-users', component: ViewUsersComponent },
      { path: 'view-customers', component: ViewCustomersComponent },
      { path: 'view-vehicles', component: ViewVehiclesComponent },
      { path: 'view-vehicle-groups', component: ViewVehicleGroupsComponent },
    ],
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule{}
export const routingComponents = [
  AppComponent,
  LoginComponent,
  HomeComponent
];
