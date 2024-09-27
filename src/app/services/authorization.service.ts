import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  isLogged: boolean = false;
  role: string = '';

  constructor() { }

  putStatus(status: boolean, role: string) {
    this.isLogged = status;
    this.role = role;
    console.log(this.isLogged);
    console.log(this.role);
  }

  checkLogin() {
    return this.isLogged;
  }

  getRole() {
    return this.role;
  }

  changeLogin() {
    this.isLogged = !this.isLogged;
  }
}
