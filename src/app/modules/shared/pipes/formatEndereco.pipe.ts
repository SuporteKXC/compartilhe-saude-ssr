import { Pipe, PipeTransform } from '@angular/core';
import { Endereco } from '../models/endereco/endereco.model';
import Inputmask from 'inputmask';

@Pipe({
  name: 'formatEndereco',
})
export class FormatEnderecoPipe implements PipeTransform {
  transform(endereco: Endereco): string {
    const cep = this.applyMask(endereco.cep, '99999-999');
    
    const segments = [
      this.createSegment(endereco.logradouro, endereco.numero),
      this.createSegment(endereco.bairro, endereco.cidade?.nome),
      this.createSegment(endereco.cidade?.siglaUf, cep)
    ];
  
    return segments.filter(Boolean).join(' - ');
  }
  
  private createSegment(
    firstValue: string | number | null | undefined, 
    secondValue: string | number | null | undefined
  ): string {
    const values = [this.getNonNullValue(firstValue), this.getNonNullValue(secondValue)];
    return values.filter(Boolean).join(', ') || '';
  }
  
  private getNonNullValue(value: string | number | null | undefined): string | undefined {
    return value != null ? String(value) : undefined;
  }
  
  private applyMask(value: string | null | undefined, mask: string | string[]): string {
    return value ? Inputmask.format(value, { mask, placeholder: '' }) : '';
  }
}
