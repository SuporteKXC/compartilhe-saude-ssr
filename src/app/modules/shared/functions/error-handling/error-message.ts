import { ValidationErrors } from '@angular/forms';
import { DefaultErrors } from '../../enums/errors.enum';
import { enumNameFromEnumValue } from '../util/enum-name-from-enum-value';
import { environment } from 'src/environments/environment';

export function getErrorMessage(
  errors: ValidationErrors | null,
  customErrors?: { [key: string]: string }
): string {
  const mergedErrors = { ...errors, ...customErrors };
  const chosenError = Object.keys(mergedErrors).at(0);

  if (!chosenError || !errors) return '';

  if (customErrors && chosenError in customErrors) return customErrors[chosenError];

  return getDefaultErrorMessage(chosenError, errors[chosenError]);
}

function getDefaultErrorMessage(errorKey: string, errorData: unknown): string {
  const error = enumNameFromEnumValue(DefaultErrors, errorKey as DefaultErrors);

  switch (error) {
    case 'REQUIRED':
      return 'Valor obrigatório.';
    case 'MAX_LENGTH':
      return `O valor deve ter no máximo ${
        (errorData as { requiredLength: number }).requiredLength
      } caracteres.`;
    case 'MIN_LENGTH':
      return `O valor deve ter no mínimo ${
        (errorData as { requiredLength: number }).requiredLength
      } caracteres.`;
    case 'EMAIL':
      return 'Por favor, indique um e-mail válido.';
    case 'INVALID_DATE':
      return 'Por favor, indique uma data válida.';
    case 'PATTERN':
    default:
      if (environment.dev)
        return `[DEV ERROR] Defina uma mensagem de erro para a chave: ${errorKey}`;
      else return 'Valor inválido.';
  }
}
