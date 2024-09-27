import { Injectable } from '@angular/core';
import { UsersService } from './users.service';
import { AuthorizationService } from './authorization.service';
import { UserInterface } from '../models/UserInterface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  users: UserInterface[] = [];

  constructor(private userService: UsersService, private authService: AuthorizationService) {
    this.userService.getUsers().subscribe((users) => this.users = users);
  }

  auth(username: string, pass: string) {
    let userFound: boolean = false;
    this.users.forEach((u) => {
      if (u['username'] === username && u['password'] === pass) {
        userFound = true;
        this.authService.putStatus(userFound, u['role']);
        console.log('logging in')
      }
    });
    return userFound
  }

}
