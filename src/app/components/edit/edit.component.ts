import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import {UsersService} from "../../services/users.service";
import {UserInterface} from "../../models/UserInterface";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{
  userId: string = '';
  user: UserInterface | null = null;
  username: string = '';
  password : string = '';
  email: string = '';
  phone: string = '';
  country: string = '';
  role: string = '';

  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit() {
    this.userId = this.router.url.split('/')[2];
    // console.log(this.userId);
    this.usersService.getUserById(this.userId).subscribe((user: UserInterface) => {
      this.username = user.username;
      this.email = user.email;
      this.phone = user.phone;
      this.country = user.country;
      this.role = user.role;
    })
    // console.log(this.user)
  }

  update() {
    const userUpdated = {
      username: this.username,
      password: this.password,
      email: this.email,
      phone: this.phone,
      country: this.country,
      role: this.role,
      id: this.userId
    }

    this.usersService.updateUser(userUpdated).subscribe((user: UserInterface) => {});
    this.router.navigate(['/dashboard']);
  }
}
