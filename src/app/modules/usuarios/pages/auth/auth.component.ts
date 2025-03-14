import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-auth',
  template: '',
})
export class AuthComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      if (user && this.authService.verifyToken()) {
        const path = localStorage.getItem('path');
        if (path) {
          this.router.navigate([path]);
        } else {
          this.router.navigate(['dashboard']);
        }
      }
    });
  }
}
