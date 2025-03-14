import { AbstractControl, ValidatorFn } from "@angular/forms";
import { FormaAtendimentoEnum } from "../../enums/forma-atendimento.enum";

export default class CustomFormPriceValidator {

    static ConditionalValidationLocalAtendimento(targetControlName: string, controlName: string): ValidatorFn {
        return (controls: AbstractControl) => {
            const target = controls.get(targetControlName);
            const matchControl = controls.get(controlName);

            if (!target?.value 
                && (matchControl?.value && matchControl.value.descricao === FormaAtendimentoEnum.PRESENCIAL)) {
                target?.setErrors({ required: true });
                return { ...target?.errors, required: true };
            }

            target?.setErrors(null);
            return null;
        };
    }

    static Referencia(targetControlName: string): ValidatorFn {
        return (controls: AbstractControl) => {
            const target = controls.get(targetControlName);

            if (isNaN(target?.value) || target?.value <= 0) {
                target?.setErrors({
                    ...target.errors,
                    referenciaInvalid: true
                });

                return { ...target?.errors, referenciaInvalid: true };
            }

            target?.setErrors(null);
            return null;
        };
    }

    static Vista(targetControlName: string, controlName: string): ValidatorFn {
        return (controls: AbstractControl) => {
            const target = controls.get(targetControlName);
            const matchControl = controls.get(controlName);

            if (target?.value >= matchControl?.value) {
                target?.setErrors({
                    ...target.errors,
                    vistaInvalid: true
                });
                return { ...target?.errors, vistaInvalid: true };
            }

            if (!target?.value) {
                target?.setErrors({ required: true });
                return { ...target?.errors, required: true };
            }

            target?.setErrors(null);
            return null;
        };
    }

    static Repasse(targetControlName: string, controlName: string): ValidatorFn {
        return (controls: AbstractControl) => {
            const target = controls.get(targetControlName);
            const matchControl = controls.get(controlName);

            if (target?.value > matchControl?.value) {
                target?.setErrors({
                    ...target.errors,
                    repasseInvalid: true
                });
                return { ...target?.errors, repasseInvalid: true };
            }

            if (!target?.value && target?.value != 0) {
                target?.setErrors({ required: true });
                return { ...target?.errors, required: true };
            }

            target?.setErrors(null);
            return null;
        };
    }
}
