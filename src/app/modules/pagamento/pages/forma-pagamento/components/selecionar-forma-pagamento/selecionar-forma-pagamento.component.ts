import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormaPagamento } from 'src/app/modules/pagamento/enums/forma-pagamento';
import { RadioOption } from 'src/app/modules/shared/models/radio-option.model';

@Component({
  selector: 'app-selecionar-forma-pagamento',
  templateUrl: './selecionar-forma-pagamento.component.html',
  styleUrls: ['./selecionar-forma-pagamento.component.scss'],
})
export class SelecionarFormaPagamentoComponent implements OnInit, OnDestroy {
  @Input() erroCartaoCredito!: boolean;

  @Output() formaPagamento = new EventEmitter<FormaPagamento>();

  public options: RadioOption<FormaPagamento>[] = [
    {
      label: 'Pix',
      value: FormaPagamento.PIX,
    },
    {
      label: 'Cartão de crédito',
      value: FormaPagamento.CARTAO_CREDITO,
    },
  ];

  public formFormaPagamento = this.fb.group({
    formaPagamento: this.fb.control<FormaPagamento | null>(null, {
      validators: Validators.required,
    }),
  });

  private formSubscription?: Subscription;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formSubscription = this.formFormaPagamento.valueChanges.subscribe((changes) => {
      if (changes.formaPagamento) this.formaPagamento.emit(changes.formaPagamento);
    });
  }

  ngOnDestroy(): void {
    this.formSubscription?.unsubscribe();
  }

  public isOptionSelected(option: RadioOption<FormaPagamento>): boolean {
    return this.formFormaPagamento.get('formaPagamento')?.value === option.value;
  }
}
