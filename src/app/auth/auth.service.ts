import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuth: boolean = false;

  constructor() { }

  setAuthenticated(auth: boolean): void {
    this.isAuth = auth;
  }  

  isAuthenticated(): boolean {
    return this.isAuth;
  }
}
