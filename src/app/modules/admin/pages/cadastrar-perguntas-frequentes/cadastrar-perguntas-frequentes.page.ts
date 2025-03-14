import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { FormCadastrarPerguntasFrequentesService } from '../../services/form-cadastrar-perguntas-frequentes/form-cadastrar-perguntas-frequentes.service';
import { CanComponentDeactivate } from 'src/app/core/guards/unsaved-changes/unsaved-changes.guard';
import { SelectOption, selectOptionsFromEnum } from 'src/app/modules/shared/components/form/select/models/select-option.model';
import { CategoriaPerguntasFrequentesEnum } from 'src/app/modules/shared/enums/categoria-perguntas-frequentes.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { PerguntasFrequentesAdmService } from '../../services/perguntas-frequentes-adm/perguntas-frequentes-adm.service';

@Component({
  selector: 'app-cadastrar-perguntas-frequentes',
  templateUrl: './cadastrar-perguntas-frequentes.page.html',
  styleUrls: ['./cadastrar-perguntas-frequentes.page.scss']
})
export class CadastrarPerguntasFrequentesPage implements OnInit, CanComponentDeactivate {
  protected isLoading!: boolean;
  protected pathId!: number;

  protected checkboxOptions: SelectOption<string>[] = selectOptionsFromEnum(CategoriaPerguntasFrequentesEnum);

  protected breadcrumb: MenuItem[] = [
    {
      label: 'Home',
      routerLink: '/admin/dashboard'
    },
    {
      label: 'Perguntas Frequentes',
      routerLink: '/admin/dashboard/perguntas-frequentes'
    },
    {
      label: 'Nova pergunta',
    }
  ];

  constructor(
    protected formService: FormCadastrarPerguntasFrequentesService,
    protected activatedRoute: ActivatedRoute,
    private perguntasFrequentesService: PerguntasFrequentesAdmService,
    private cdref: ChangeDetectorRef,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formService.formPerguntasFrequentes.reset({}, { emitEvent: false });
    this.pathId = this.activatedRoute.snapshot.params['id'];

    if (this.pathId) {
      this.perguntasFrequentesService.obterPerguntaFrequente(this.pathId)
        .subscribe((response) => {
          const categorias = response.categorias?.map((categoria) => categoria.categoria);

          this.formService.formPerguntasFrequentes.patchValue({
            ...response,
            categorias
          }, { emitEvent: false });

          this.formService.save();
          this.cdref.detectChanges();
        });
    }
  }

  canDeactivate(): boolean {
    return this.formService.isFormSaved;
  }

  onSubmitCadastrar(event: SubmitEvent) {
    this.formService.save(event);

    const perguntas = this.formService.parsePerguntasFrequentes();

    this.perguntasFrequentesService.cadastrarPerguntaFrequente(perguntas)
      .subscribe({
        next: () => (this.isLoading = true),
        complete: () => (this.formService.onSaveSuccess({
          message: "Pergunta adicionada com sucesso!",
          onSendCallback: () => {
            this.isLoading = false;
            this.router.navigate(['admin', 'dashboard', 'perguntas-frequentes']);
          }
        })),
        error: () => (this.isLoading = false),
      });

    return event;
  }

  onSubmitAlterar(event: SubmitEvent) {
    this.formService.save(event);

    const pergunta = this.formService.parsePerguntasFrequentes();

    this.perguntasFrequentesService.alterarPerguntafrequente(pergunta).subscribe({
      next: () => (this.isLoading = true),
      complete: () => (this.formService.onSaveSuccess({
        message: "Pergunta editada com sucesso!",
        onSendCallback: () => {
          this.isLoading = false;
          this.router.navigate(['admin', 'dashboard', 'perguntas-frequentes']);
        }
      })),
      error: () => (this.isLoading = false),
    });

    return event;
  }
}
