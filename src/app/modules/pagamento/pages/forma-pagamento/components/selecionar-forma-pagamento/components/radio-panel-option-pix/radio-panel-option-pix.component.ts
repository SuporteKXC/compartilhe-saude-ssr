import { Component, Input } from '@angular/core';
import { FormaPagamento } from 'src/app/modules/pagamento/enums/forma-pagamento';
import { RadioOption } from 'src/app/modules/shared/models/radio-option.model';

@Component({
  selector: 'app-radio-panel-option-pix',
  templateUrl: './radio-panel-option-pix.component.html',
  styleUrls: ['./radio-panel-option-pix.component.scss'],
})
export class RadioPanelOptionPixComponent {
  @Input() option!: RadioOption<FormaPagamento>;
  @Input() isSelected = false;
}
