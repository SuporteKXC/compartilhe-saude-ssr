import { AbstractControl, ValidatorFn } from "@angular/forms";
import { FormaAtendimento } from "../../models/parceiro/forma-atendimento.model";
import { FormaAtendimentoEnum } from "../../enums/forma-atendimento.enum";
import { LocalAtendimento } from "../../models/parceiro/local-atendimento.model";

export default class CustomFormParceiroValidator {

  static ConditionalValidationLocalAtendimento(targetControlName: string, controlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const target = controls.get(targetControlName);
      const matchControl = controls.get(controlName);

      if (matchControl?.value) {
        const matchControlValue = matchControl.value as FormaAtendimento[];
        const targetControlValue = target?.value as LocalAtendimento[];

        const isPresencial = matchControlValue.find((formaAtendimento) =>
          formaAtendimento.descricao === FormaAtendimentoEnum.PRESENCIAL
        );

        if (isPresencial && targetControlValue.length <= 0) {
          target?.setErrors({ required: true });
          return { ...target?.errors, required: true };
        }
      }

      target?.setErrors(null);
      return null;
    };
  }
}