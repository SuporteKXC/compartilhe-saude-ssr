import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-big-numbers',
  templateUrl: './big-numbers.component.html',
  styleUrls: ['./big-numbers.component.scss'],
})
export class BigNumbersComponent {
  public get bigNumbersData(): (typeof environment)['bigNumbers'] {
    return environment.bigNumbers;
  }
}
