import {NgModule} from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login.component';
import { HomeComponent } from './Home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { AdministrationComponent } from './Administration/administration.component'
import { PreferenceComponent } from './Administration/preference.component'

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
      { path: 'user-preferences', component: PreferenceComponent }
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
