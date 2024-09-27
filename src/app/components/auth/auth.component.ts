import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from "../../services/authentication.service";
import { AuthorizationService} from "../../services/authorization.service";
import { UserInterface } from "../../models/UserInterface";
import { UsersService } from "../../services/users.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  isLogin: boolean = true;
  text: string = '';
  color: string = '';

  // Forms
  username: string = '';
  password: string = '';
  email: string = '';
  phone: string = '';
  country: string = '';

  constructor(private authService: AuthenticationService, private router: Router, private userService: UsersService, private authrService: AuthorizationService) {
  }

  toggleForm(status: boolean) {
    this.isLogin = status;
  }

  // Login user
  login() {
    if (this.username && this.password) {
      if (this.authService.auth(this.username, this.password)) {
        this.text = 'Logging Successfully';
        this.color = 'text-success';
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 1000);
      } else {
        this.text = 'Incorrect username or password';
        this.color = 'text-danger';
      }
    } else {
      this.text = 'Please Enter Username and Password';
      this.color = 'text-danger';
    }
  }

  // Register  a new user
  register() {
    if (this.username && this.password && this.email && this.phone && this.country) {
      let user: UserInterface = {
        username: this.username,
        password: this.password,
        email: this.email,
        phone: this.phone,
        country: this.country,
        role: 'user'
      };
      this.userService.addUser(user).subscribe((user) => {
        this.text = 'User Registered Successfully';
        this.color = 'text-success';
        this.authrService.putStatus(true, "user");
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 1000);
      });
    } else {
      this.text = 'Please Fill all the fields';
      this.color = 'text-danger';
    }
  }
}
