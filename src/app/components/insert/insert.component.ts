import { Component } from '@angular/core';
import { UsersService} from "../../services/users.service";
import {Router} from "@angular/router";
import {UserInterface} from "../../models/UserInterface";

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrl: './insert.component.css'
})
export class InsertComponent {
  username: string = '';
  email: string = '';
  phone: string = '';
  role: string = '';
  country: string = '';

  constructor(private usersService: UsersService, private router: Router) {}
  insert() {
    const user = {
      username: this.username,
      email: this.email,
      phone: this.phone,
      country: this.country,
      role: this.role,
      password: ''
    }

    this.usersService.addUser(user).subscribe((user: UserInterface) => {
      console.log(user);
    });

    this.router.navigate(['/dashboard']);

  }
}
