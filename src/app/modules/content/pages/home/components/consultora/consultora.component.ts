import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultora',
  templateUrl: './consultora.component.html',
  styleUrls: ['./consultora.component.scss'],
})
export class ConsultoraComponent {
  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
