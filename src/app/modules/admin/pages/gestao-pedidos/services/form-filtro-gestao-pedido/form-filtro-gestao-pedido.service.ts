import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StatusPedido } from 'src/app/modules/pagamento/enums/status-pedido';
import { PedidoFiltro } from '../../models/pedido-filtro.model';
import { DateTime } from 'luxon';
import { DEFAULT_DATE_FORMAT } from 'src/app/modules/shared/constants/date-formats';

@Injectable({
  providedIn: 'root',
})
export class FormFiltroGestaoPedidoService {
  private formFiltros = this.fb.group({
    texto: this.fb.control<string>(''),
    status: this.fb.control<StatusPedido | null>(null),
    data: this.fb.control<[Date, Date] | null>(null),
  });

  public get group(): typeof this.formFiltros {
    return this.formFiltros;
  }

  public get parsedData(): PedidoFiltro {
    const rawValue = this.group.getRawValue();

    const dataInicial = rawValue.data?.[0]
      ? DateTime.fromJSDate(rawValue.data[0]).toFormat(DEFAULT_DATE_FORMAT)
      : null;
    const dataFinal = rawValue.data?.[1]
      ? DateTime.fromJSDate(rawValue.data[1]).toFormat(DEFAULT_DATE_FORMAT)
      : null;

    return {
      texto: rawValue.texto,
      status: rawValue.status,
      dataInicial,
      dataFinal,
    };
  }

  constructor(private fb: FormBuilder) {}
}
