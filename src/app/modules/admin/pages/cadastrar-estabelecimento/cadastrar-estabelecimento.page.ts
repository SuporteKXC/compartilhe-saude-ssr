import { Component, OnInit, ViewChild } from '@angular/core';
import { FormCadastrarEstabelecimentoService } from '../../services/form-cadastrar-estabelecimento/form-cadastrar-estabelecimento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AutocompleteComponent } from 'src/app/modules/shared/components/form/autocomplete/autocomplete.component';
import { Cidade } from 'src/app/modules/shared/models/endereco/cidade.model';
import { MenuItem } from 'primeng/api';
import { ParceirosAdmService } from 'src/app/modules/admin/services/parceiros-adm/parceiros-adm.service';
import { Parceiro } from '../../models/parceiro.model';
import { setImgPath } from 'src/app/modules/shared/functions/util/image-path';
import { environment } from 'src/environments/environment';
import { RadioOption, radioOptionsFromEnum } from 'src/app/modules/shared/models/radio-option.model';
import { ModalidadeParceiroEnum } from 'src/app/modules/shared/enums/modalidade-parceiro.enum';
import { CanComponentDeactivate } from 'src/app/core/guards/unsaved-changes/unsaved-changes.guard';
import { CategoriaParceiroEnum } from '../gestao-parceiros/enums/categoria-parceiro.enum';

@Component({
  selector: 'app-cadastrar-estabelecimento',
  templateUrl: './cadastrar-estabelecimento.page.html',
  styleUrls: ['./cadastrar-estabelecimento.page.scss']
})
export class CadastrarEstabelecimentoPage implements OnInit, CanComponentDeactivate {
  @ViewChild('autoCompleteCidade', { static: false }) autoCompleteCidade?: AutocompleteComponent;

  public isLoading = false;
  protected returnPath = ['/', 'admin', 'dashboard', 'rede-compartilhe'];

  protected radioOptions: RadioOption<unknown>[] = [];
  protected isDisable = false;

  protected parceiro!: Parceiro;
  protected pathId!: number;
  protected cidade!: Cidade;

  protected breadcrumb: MenuItem[] = [
    {
      label: 'Home',
      routerLink: '/admin/dashboard'
    },
    {
      label: 'Rede Compartilhe',
      routerLink: '/admin/dashboard/rede-compartilhe'
    },
    {
      label: 'Cadastro Rede Compartilhe',
    }
  ];

  protected categoriaParceiro = CategoriaParceiroEnum;

  private modalidadeOptionsTooltips = {
    [ModalidadeParceiroEnum.CONNECT_FREE]: 'Plano gratuito para parceiros da rede compartilhe saúde.',
    [ModalidadeParceiroEnum.CONNECT_START]: 'Plano básico para parceiros da rede compartilhe saúde.',
    [ModalidadeParceiroEnum.CONNECT_PLUS]: 'Plano intermediário para parceiros da rede compartilhe saúde.',
    [ModalidadeParceiroEnum.CONNECT_MAX]: 'Plano completo para parceiros da rede compartilhe saúde.',
  };

  constructor(
    protected formService: FormCadastrarEstabelecimentoService,
    private parceiroAdmService: ParceirosAdmService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.formService.formEstabelecimento.reset();

    this.pathId = this.activatedRoute.snapshot.params['id'];
    if (this.pathId) {
      this.parceiroAdmService.obterParceiro(this.pathId).subscribe((response) => {
        this.formService.formEstabelecimento.patchValue({
          ...response,
          pathImagem: setImgPath(environment.imgUrl, response.pathImagem)
        });
        if (response.endereco?.cidade) {
          this.cidade = response.endereco.cidade;
        }
        this.parceiro = response;
        this.formService.clearRequiredValidator();
        this.formService.save();
      });
      this.formService.save();
    }

    this.setRadioOptions();

    this.formService.formEstabelecimento.get('parceiro')?.valueChanges.subscribe((value) => {
      this.formService.clearRequiredValidator();
      if(!value) {
        this.formService.formEstabelecimento.get('destaque')?.reset();
        this.formService.formEstabelecimento.get('unidadePropria')?.reset();
        this.isDisable = true;
      } else {
        this.isDisable = false;
      }
    });
  }

  canDeactivate() {
    return this.formService.isFormSaved;
  }

  onSubmitCadastrar(event: SubmitEvent) {
    event.preventDefault();

    this.formService.save(event);
    const parceiroEstabelecimento = this.formService.estabelecimento;
    this.parceiroAdmService.cadastrarEstabelecimento(parceiroEstabelecimento).subscribe({
      next: () => this.isLoading = true,
      complete: () => {
        this.formService.onSaveSuccess({
          message: 'Cadastro realizado com sucesso!',
          onSendCallback: () => this.router.navigate(this.returnPath)
        });
      },
      error: () => this.isLoading = false
    });
  }

  onSubmitAlterar(event: SubmitEvent) {
    event.preventDefault();

    this.formService.save(event);
    const parceiroEstabelecimento = this.formService.estabelecimento;
    this.parceiroAdmService.alterarEstabelecimento(parceiroEstabelecimento).subscribe({
      next: () => this.isLoading = true,
      complete: () => {
        this.formService.onSaveSuccess({
          message: 'Seus dados foram atualizados com sucesso!',
          onSendCallback: () => this.router.navigate(this.returnPath)
        });
      },
      error: () => this.isLoading = false
    });
  }

  setRadioOptions() {
    this.radioOptions = radioOptionsFromEnum(ModalidadeParceiroEnum, this.modalidadeOptionsTooltips);
  }
}

