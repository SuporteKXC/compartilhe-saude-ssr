import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-badge-environment',
  templateUrl: './badge-environment.component.html',
  styleUrls: ['./badge-environment.component.scss']
})
export class BadgeEnvironmentComponent {

  isHml() {   
    return environment.name === 'hml';
  }
}
