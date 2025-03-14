import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-button-login',
  templateUrl: './button-login.component.html',
  styleUrls: ['./button-login.component.scss']
})
export class ButtonLoginComponent {
  constructor(protected authService: AuthService) {}
}
