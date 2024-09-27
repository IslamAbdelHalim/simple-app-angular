import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  currentRoute: string;
  isLoggedIn: boolean = false;

  constructor(private router: Router, public authService: AuthorizationService) {
    this.currentRoute = this.router.url;
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
        this.isLoggedIn = this.authService.checkLogin();
      }
    });
  }

  logout() {
    this.authService.changeLogin();
    this.router.navigate(['/home']);
  }
}
