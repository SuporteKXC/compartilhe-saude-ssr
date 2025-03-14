import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TipoClienteEnum } from 'src/app/modules/shared/enums/tipo-cliente.enum';
import { FormCadastrarPessoaJuridicaService } from '../../services/form-cadastrar-pessoa-juridica/form-cadastrar-pessoa-juridica.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CanComponentDeactivate } from 'src/app/core/guards/unsaved-changes/unsaved-changes.guard';
import { PessoaJuridicaService } from '../../services/pessoa-adm/pessoa-juridica/pessoa-juridica.service';
import { Cidade } from 'src/app/modules/shared/models/endereco/cidade.model';
import { ModalidadePessoaJuridicaEnum } from 'src/app/modules/shared/enums/modalidade-pessoa-juridica.enum';
import { RadioOption, radioOptionsFromEnum } from 'src/app/modules/shared/models/radio-option.model';

@Component({
  selector: 'app-cadastrar-pessoa-juridica',
  templateUrl: './cadastrar-pessoa-juridica.page.html',
  styleUrls: ['./cadastrar-pessoa-juridica.page.scss']
})
export class CadastrarPessoaJuridicaPage implements CanComponentDeactivate, OnInit {

  protected pathId!: number;
  protected cidade!: Cidade;

  protected isLoading = false;
  protected returnPath = ['/', 'admin', 'dashboard', 'clientes-compartilhe'];
  protected tipoCliente = TipoClienteEnum;
  protected radioOptions: RadioOption<unknown>[] = [];

  breadcrumb: MenuItem[] = [
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
      routerLink: '/admin/dashboard/clientes-compartilhes/pessoa-fisica'
    }
  ];

  private modalidadeOptionsTooltips = {
    [ModalidadePessoaJuridicaEnum.EMPRESARIAL_LUX]: 'Plano de R$ 19,90 com mensalidade fixa e acumulativa para funcionários e seus familiares.',
    [ModalidadePessoaJuridicaEnum.EMPRESARIAL_MAXIME]: 'Plano de R$ 49,90 com mensalidade fixa e acumulativa para funcionários e seus familiares.',
    [ModalidadePessoaJuridicaEnum.EMPRESARIAL_OPTIMUM]: 'Plano de R$ 79,90 com mensalidade fixa e acumulativa para funcionários e seus familiares.',
  };


  constructor(
    protected formService: FormCadastrarPessoaJuridicaService,
    private pessoaJuridicaService: PessoaJuridicaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.formService.reset();

    this.pathId = this.activatedRoute.snapshot.params['id'];
    if (this.pathId) {
      this.pessoaJuridicaService.obter(this.pathId).subscribe(response => {
        this.formService.cadastrarPessoaJuridica.patchValue(response);
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
    const pessoa = this.formService.pessoaJuridica;

    this.formService.save(event);

    this.pessoaJuridicaService.cadastrar(pessoa).subscribe({
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
    const pessoa = this.formService.pessoaJuridica;

    this.formService.save(event);

    this.pessoaJuridicaService.atualizar(pessoa).subscribe({
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
    this.radioOptions = radioOptionsFromEnum(ModalidadePessoaJuridicaEnum, this.modalidadeOptionsTooltips);
  }
}
