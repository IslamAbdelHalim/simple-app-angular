import {Component, OnInit} from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { UserInterface } from '../../models/UserInterface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  users: UserInterface[] = [];
  role = '';
  constructor(private userService: UsersService, private authService: AuthorizationService, private router: Router) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((users) => this.users = users);
    this.role = this.authService.getRole();
  }

  goEdit(user: UserInterface) {
    this.router.navigate([`/edit/${user.id}`]);
  }

  deleteUser(user: UserInterface) {
    this.userService.deleteUser(user).subscribe(() => this.users.splice(this.users.indexOf(user), 1));
  }

  insert() {
    this.router.navigate(['/insert']);
  }
}
