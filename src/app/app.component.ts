import { Component } from '@angular/core';
import { HeaderComponent } from './Header/header.component'

@Component({
  selector: 'datalive-app',
  template: `<header-app></header-app>
              <router-outlet></router-outlet>`,
})
export class AppComponent {  }
