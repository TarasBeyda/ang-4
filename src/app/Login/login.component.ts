import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_services/index';

@Component({
  moduleId: module.id,
  selector: 'login-app',
  templateUrl: `login.html`,
  styleUrls: ['/src/style.css']
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.email, this.model.password)
      .subscribe(result => {
        if (result === true) {
          this.router.navigate(['/home']);
        } else {
          this.error = 'Username or password is incorrect';
          this.loading = false;
        }
      });
  }
}
