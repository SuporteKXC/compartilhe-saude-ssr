import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Subject } from 'rxjs';
import { TipoClienteEnum } from 'src/app/modules/shared/enums/tipo-cliente.enum';
import { parseToUrl } from 'src/app/modules/shared/functions/parse-to-url/parse-to-url';

@Component({
  selector: 'app-clientes-compartilhe',
  templateUrl: './clientes-compartilhe.page.html',
  styleUrls: ['./clientes-compartilhe.page.scss']
})
export class ClientesCompartilhePage {
  public shouldSearchAgain$ = new Subject<void>();
  
  protected breadcrumb: MenuItem[] = [
    {
      label: 'Home',
      routerLink: '/admin/dashboard'
    },
    {
      label: 'Clientes Compartilhe',
      routerLink: '/admin/dashboard/clientes-compartilhe'
    }
  ];

  protected tipoCliente = TipoClienteEnum;
  protected visible = false;

  constructor(private router: Router) { }

  toggleModal(): void {
    this.visible = !this.visible;
  }

  cadastrar(tipoCliente: TipoClienteEnum): void {
    const path = 'admin/dashboard/clientes-compartilhe/cadastrar';

    if (tipoCliente === TipoClienteEnum.PESSOA_FISICA) {
      this.router.navigate([path, parseToUrl(TipoClienteEnum.PESSOA_FISICA, '-')]);
      return;
    }
    this.router.navigate([path, parseToUrl(TipoClienteEnum.PESSOA_JURIDICA, '-')]);
  }
}
