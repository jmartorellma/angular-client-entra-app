import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent implements OnInit {
  
  constructor(private oidcSecurityService: OidcSecurityService) {}

  ngOnInit() {
    
  }

  logout() {
    this.oidcSecurityService.logoff();
  }
}