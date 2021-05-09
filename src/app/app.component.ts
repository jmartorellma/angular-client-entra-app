import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-client-entra-app';

  constructor(
    private oidcSecurityService: OidcSecurityService,
    private authService: AuthService) {}

  ngOnInit(){
    this.oidcSecurityService
    .checkAuth()
    .subscribe((isAuthenticated) => {
      this.authService.setAuthenticated(isAuthenticated);
      console.log('app authenticated', isAuthenticated)
    });
  }
  
}
