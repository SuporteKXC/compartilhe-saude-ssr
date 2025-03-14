import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { SelectOption, selectOptionsFromEnum } from 'src/app/modules/shared/components/form/select/models/select-option.model';
import { TipoContaEnum } from 'src/app/modules/shared/enums/tipo-conta.enum';
import { ParceirosAdmService } from '../../services/parceiros-adm/parceiros-adm.service';
import { Banco } from 'src/app/modules/shared/models/parceiro/banco.model';
import { DIGITO_PATTERN } from 'src/app/modules/shared/constants/patterns';

@Component({
  selector: 'app-form-dados-bancarios',
  templateUrl: './form-dados-bancarios.component.html',
  styleUrls: ['./form-dados-bancarios.component.scss']
})
export class FormDadosBancariosComponent implements OnInit {
  @Input({ required: true }) formGroup!: FormGroup;

  protected bancoOptions: SelectOption<Banco>[] = [];
  protected tipoContaOptions = selectOptionsFromEnum(TipoContaEnum);

  protected get digitoCustomErrors() {
    return {
      pattern: 'Por favor, indique um dígito válido.',
    };
  }

  constructor(private parceirosAdmService: ParceirosAdmService) { }

  ngOnInit(): void {
    this.parceirosAdmService.listarBancos().subscribe((response) => {
      this.bancoOptions = response.map((banco) => ({
        label: banco.descricao,
        value: banco,
      }));
    });

    this.formGroup?.valueChanges.subscribe(() => {
      this.atualizarValidacao({ control: 'agenciaDigito', matchControl: 'agencia' });
      this.atualizarValidacao({ control: 'contaDigito', matchControl: 'conta' });
    });
  }

  private atualizarValidacao(controlValidation: { control: string, matchControl: string }): void {
    const control = this.formGroup.get(controlValidation.control);
    const matchControl = this.formGroup.get(controlValidation.matchControl);

    if (matchControl?.value) {
      control?.clearValidators();
      control?.setValidators([
        Validators.required,
        Validators.maxLength(1),
        Validators.pattern(DIGITO_PATTERN)
      ]);
    } else {
      control?.clearValidators();
      control?.setValidators([
        Validators.maxLength(1),
        Validators.pattern(DIGITO_PATTERN)
      ]);
    }
    control?.updateValueAndValidity({ onlySelf: true });
  }
}
