import { Component, OnInit } from '@angular/core';
import { FormCadastrarProfissionalService } from '../../services/form-cadastrar-profissional/form-cadastrar-profissional.service';
import { FormGroup } from '@angular/forms';
import { Cidade } from 'src/app/modules/shared/models/endereco/cidade.model';
import { ParceirosAdmService } from 'src/app/modules/admin/services/parceiros-adm/parceiros-adm.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Parceiro } from '../../models/parceiro.model';
import { MenuItem } from 'primeng/api';
import { setImgPath } from 'src/app/modules/shared/functions/util/image-path';
import { environment } from 'src/environments/environment';
import { CanComponentDeactivate } from 'src/app/core/guards/unsaved-changes/unsaved-changes.guard';
import { ModalidadeParceiroEnum } from 'src/app/modules/shared/enums/modalidade-parceiro.enum';
import { RadioOption, radioOptionsFromEnum } from 'src/app/modules/shared/models/radio-option.model';
import { CategoriaParceiroEnum } from '../gestao-parceiros/enums/categoria-parceiro.enum';

@Component({
  selector: 'app-cadastrar-profissional',
  templateUrl: './cadastrar-profissional.page.html',
  styleUrls: ['./cadastrar-profissional.page.scss'],
})
export class CadastrarProfissionalPage implements OnInit, CanComponentDeactivate {
  public isLoading!: boolean;
  protected returnPath = ['/', 'admin', 'dashboard', 'rede-compartilhe'];

  protected formParceiro!: FormGroup;
  protected formEndereco!: FormGroup;
  protected radioOptions: RadioOption<unknown>[] = [];

  protected cidade!: Cidade;
  protected pathId!: number;
  protected parceiro!: Parceiro;

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
    protected formService: FormCadastrarProfissionalService,
    private parceirosAdmService: ParceirosAdmService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.formParceiro = formService.formProfissional;
    this.formEndereco = formService.formEnderecoProfissional;
  }

  ngOnInit(): void {
    this.formParceiro.reset();

    this.pathId = this.activatedRoute.snapshot.params['id'];
    if (this.pathId) {
      this.parceirosAdmService.obterParceiro(this.pathId).subscribe((response) => {
        this.formParceiro.patchValue({
          ...response,
          pathImagem: setImgPath(environment.imgUrl, response.pathImagem)
        });
        if (response.endereco?.cidade) {
          this.cidade = response.endereco?.cidade;
        }
        this.parceiro = response;
        this.formService.save();
      });
      this.formService.save();
    }

    this.setRadioOptions();
  }

  canDeactivate() {
    return this.formService.isFormSaved;
  }

  onSubmitCadastrar(event: SubmitEvent) {
    this.formService.save(event);
    const profissional = this.formService.profissional;
    this.parceirosAdmService.cadastrarProfissional(profissional).subscribe({
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
    this.formService.save(event);
    const profissional = this.formService.profissional;
    this.parceirosAdmService.alterarProfissional(profissional).subscribe({
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
