import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import {
  ActiveRoute,
  NavBarItem,
  anyItemSubrouteActive,
  isSubrouteItem,
} from 'src/app/modules/shared/models/navbar-items.model';
import { environment } from 'src/environments/environment';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss'],
})
export class MenuLateralComponent implements OnInit {
  @Input() menuItems!: NavBarItem[];

  public activeRoute!: string;
  public pathImage = environment.imgUrl;
  public isVisible = false;
  public user: User | null = null;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.getUserInfo();
    this.authService.didLogout$.subscribe(() => this.user = null);

    this.activeRoute = this.router.url;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) this.activeRoute = this.router.url;
    });
  }

  toggleMenu() {
    this.isVisible = !this.isVisible;
  }

  getPageDetails() {
    return this.menuItems.find((navItem) =>
      isSubrouteItem(navItem)
        ? anyItemSubrouteActive(navItem, this.activeRoute)
        : (navItem as ActiveRoute).path === this.activeRoute
    );
  }

  logout() {
    this.authService.logout();
  }
}
