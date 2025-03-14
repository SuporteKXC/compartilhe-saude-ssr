import { Component, OnInit } from '@angular/core';
import { FormCadastrarPessoaFisicaService } from '../../services/form-cadastrar-pessoa-fisica/form-cadastrar-pessoa-fisica.service';
import { MenuItem } from 'primeng/api';
import { TipoClienteEnum } from 'src/app/modules/shared/enums/tipo-cliente.enum';
import { CanComponentDeactivate } from 'src/app/core/guards/unsaved-changes/unsaved-changes.guard';
import { PessoaFisicaService } from '../../services/pessoa-adm/pessoa-fisica/pessoa-fisica.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cidade } from 'src/app/modules/shared/models/endereco/cidade.model';
import { ModalidadePessoaFisicaEnum } from 'src/app/modules/shared/enums/modalidade-pessoa-fisica.enum';
import { RadioOption, radioOptionsFromEnum } from 'src/app/modules/shared/models/radio-option.model';

@Component({
  selector: 'app-cadastrar-pessoa-fisica',
  templateUrl: './cadastrar-pessoa-fisica.page.html',
  styleUrls: ['./cadastrar-pessoa-fisica.page.scss'],
})
export class CadastrarPessoaFisicaPage implements CanComponentDeactivate, OnInit{

  protected pathId!: number;
  protected cidade!: Cidade;

  protected isLoading = false;
  protected returnPath = ['/', 'admin', 'dashboard', 'clientes-compartilhe'];
  protected tipoCliente = TipoClienteEnum;
  protected radioOptions: RadioOption<unknown>[] = [];

  protected breadcrumb: MenuItem[] = [
    {
      label: 'Home',
      routerLink: '/admin/dashboard'
    },
    {
      label: 'Clientes Compartilhe',
      routerLink: '/admin/dashboard/clientes-compartilhe'
    },
    {
      label: 'Cadastro de Cliente',
      routerLink: '/admin/dashboard/clientes-compartilhe/pessoa-fisica'
    }
  ];

  private modalidadeOptionsTooltips = {
    [ModalidadePessoaFisicaEnum.CLUBE_COMPARTILHE]: 'Uma assinatura mensal que acumula saldo para você utilizar em consultas, exames, procedimentos e cirurgias quando precisar.',
    [ModalidadePessoaFisicaEnum.COMPARTILHE_GRATUITO]: 'Cadastro gratuito para ter acesso a uma rede de parceiros com valores exclusivos em serviços de saúde.',
  };

  constructor(
    protected formService: FormCadastrarPessoaFisicaService,
    private pessoaFisicaService: PessoaFisicaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.formService.reset();

    this.pathId = this.activatedRoute.snapshot.params['id'];
    if (this.pathId) {
      this.pessoaFisicaService.obter(this.pathId).subscribe(response => {
        this.formService.cadastrarPessoaFisica.patchValue(response);
        if (response.enderecos) {
          this.formService.cadastrarEndereco.patchValue(response.enderecos[0]);
          if (response.enderecos[0]?.cidade) {
            this.cidade = response.enderecos[0]?.cidade;
            this.formService.save();
          }
          this.formService.save();
        }
        this.formService.save();
      });
    }

    this.setRadioOptions();
  }

  canDeactivate() {
    return this.formService.isFormSaved;
  }

  onSubmitCadastrar(event: SubmitEvent) {
    const pessoa = this.formService.pessoaFisica;

    this.formService.save(event);

    this.pessoaFisicaService.cadastrar(pessoa).subscribe({
      next: () => this.isLoading = true,
      complete: () => {
        this.formService.onSaveSuccess({
          message: 'Cadastro realizado com sucesso!',
          onSendCallback: () => { this.router.navigate(this.returnPath); }
        });
      },
      error: () => this.isLoading = false,
    }).add(() => this.isLoading = false);
  }

  onSubmitAtualizar(event: SubmitEvent) {
    const pessoa = this.formService.pessoaFisica;

    this.formService.save(event);

    this.pessoaFisicaService.atualizar(pessoa).subscribe({
      next: () => this.isLoading = true,
      complete: () => {
        this.formService.onSaveSuccess({
          message: 'Edição de usuário realizado com sucesso!',
          onSendCallback: () => { this.router.navigate(this.returnPath); }
        });
      },
      error: () => this.isLoading = false,
    }).add(() => this.isLoading = false);
  }

  setRadioOptions() {
    this.radioOptions = radioOptionsFromEnum(ModalidadePessoaFisicaEnum, this.modalidadeOptionsTooltips);
  }
}
