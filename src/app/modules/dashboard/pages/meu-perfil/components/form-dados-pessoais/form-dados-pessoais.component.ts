import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EstadoCivil } from 'src/app/modules/shared/enums/estado-civil.enum';
import { RendaSalarioMinimo } from 'src/app/modules/shared/enums/renda-salario-minimo.enum';
import { SexoBiologico } from 'src/app/modules/shared/enums/sexo-biologico.enum';
import { DashboardService } from 'src/app/modules/dashboard/services/dashboard/dashboard.service';
import { selectOptionsFromEnum } from 'src/app/modules/shared/components/form/select/models/select-option.model';
import { TELEFONE_PATTERN } from 'src/app/modules/shared/constants/patterns';
import { PerfilService } from '../../services/perfil.service';
import { MessageService } from 'primeng/api';
import { RadioOption } from 'src/app/modules/shared/models/radio-option.model';

@Component({
  selector: 'app-form-dados-pessoais',
  templateUrl: './form-dados-pessoais.component.html',
  styleUrls: ['./form-dados-pessoais.component.scss'],
})
export class FormDadosPessoaisComponent implements OnInit {
  public formDadosPessoais = this.fb.group({
    nome: this.fb.nonNullable.control(''),
    cpf: this.fb.nonNullable.control(''),
    dataNascimento: this.fb.nonNullable.control(''),
    contatoWhatsapp: this.fb.nonNullable.control('', {
      validators: [Validators.pattern(TELEFONE_PATTERN), Validators.required],
    }),
    email: this.fb.nonNullable.control(''),
    sexoBiologico: this.fb.control<SexoBiologico | null>(null),
    estadoCivil: this.fb.control<EstadoCivil | null>(null),
    profissao: this.fb.control('', { validators: Validators.maxLength(255) }),
    rendaSalarioMinimo: this.fb.control<RendaSalarioMinimo | null>(null),
  });

  public sexoBiologicoOptions: RadioOption<SexoBiologico>[] = [
    { label: 'Feminino', value: SexoBiologico.F },
    { label: 'Masculino', value: SexoBiologico.M },
  ];

  public estadoCivilOptions = selectOptionsFromEnum(EstadoCivil);

  public rendaOptions = selectOptionsFromEnum(RendaSalarioMinimo);

  public get contatoWhatsappCustomErrors() {
    return {
      pattern: 'Por favor, indique um telefone válido.',
    };
  }

  public formLoading = false;

  constructor(
    private fb: FormBuilder,
    private dashboardService: DashboardService,
    private perfilService: PerfilService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.perfilService.dadosPessoais.subscribe((dados) => this.formDadosPessoais.patchValue(dados));
  }

  public salvarDadosPessoais(): void {
    this.formLoading = true;

    this.dashboardService
      .salvarDadosPessoais(this.formDadosPessoais.getRawValue())
      .subscribe(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Seus dados foram salvos com sucesso!',
          icon: 'check_circle',
        });
      })
      .add(() => (this.formLoading = false));
  }
}
