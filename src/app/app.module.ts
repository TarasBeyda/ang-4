import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdInputModule, MdCardModule, MdToolbarModule, MdMenuModule, MdIconModule } from '@angular/material';


// used to create fake backend
import { fakeBackendProvider } from './_fake-back/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AuthGuard } from './_guards/auth.guard';
import { AuthenticationService, UserService } from './_services/index';



import { APP_CONFIG, AppConfig } from './app.config';

import { AppComponent }  from './app.component';
import { LoginComponent } from './Login/login.component'
import { HomeComponent } from './Home/home.component'
import { HeaderComponent } from './Header/header.component'
import { AdministrationComponent } from './Administration/administration.component'
import { PreferenceComponent } from './Administration/preference.component'

import { AppRoutingModule, routingComponents } from './app.routes'

@NgModule({
  imports:      [
                  BrowserModule,
                  AppRoutingModule,
                  FormsModule,
                  BrowserAnimationsModule,
                  MdButtonModule, MdInputModule, MdCardModule, MdToolbarModule, MdMenuModule, MdIconModule,
                  HttpModule
                ],
  declarations: [
                  AppComponent,
                  LoginComponent,
                  HomeComponent,
                  HeaderComponent,
                  AdministrationComponent, PreferenceComponent,
                  routingComponents
                ],
  bootstrap:    [ AppComponent ],
  providers:    [
                  AuthGuard,
                  AuthenticationService,
                  UserService,

                  // providers used to create fake backend
                  fakeBackendProvider,
                  MockBackend,
                  BaseRequestOptions,
                  {
                    provide: APP_CONFIG,
                    useValue: AppConfig
                  }
                ]
})

export class AppModule {  }
