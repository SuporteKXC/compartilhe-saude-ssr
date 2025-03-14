import { CategoriaProduto } from '../../admin/pages/gestao-produtos/enums/CategoriaProduto';
import { enumNameFromEnumValue } from '../functions/util/enum-name-from-enum-value';
import { CardDynamicRoute } from '../models/card-dynamic-routes.model';
import { ProdutoLabel } from '../models/produto/produto-label.model';

export const PRODUTOS_LABEL: ProdutoLabel[] = [
  { icon: 'ecg', categoria: CategoriaProduto.PACOTE, label: 'Check-ups' },
  { icon: 'stethoscope', categoria: CategoriaProduto.CONSULTA, label: 'Consultas' },
  { icon: 'diagnosis', categoria: CategoriaProduto.EXAME, label: 'Exames' },
  { icon: 'dentistry', categoria: CategoriaProduto.ODONTOLOGIA, label: 'Odontologia' },
  { icon: 'syringe', categoria: CategoriaProduto.PROCEDIMENTO, label: 'Procedimentos' },
  { icon: 'surgical', categoria: CategoriaProduto.CIRURGIA, label: 'Cirurgias' },
];

export const PRODUTOS_DYNAMIC_ROUTES: CardDynamicRoute[] = [
  {
    path: 'consultas',
    matchPath: [enumNameFromEnumValue(CategoriaProduto, CategoriaProduto.CONSULTA)],
  },
  {
    path: 'exames',
    matchPath: [enumNameFromEnumValue(CategoriaProduto, CategoriaProduto.EXAME)],
  },
  {
    path: 'odontologia',
    matchPath: [enumNameFromEnumValue(CategoriaProduto, CategoriaProduto.ODONTOLOGIA)],
  },
  {
    path: 'checkups',
    matchPath: [enumNameFromEnumValue(CategoriaProduto, CategoriaProduto.PACOTE)],
  },
  {
    path: 'procedimentos',
    matchPath: [enumNameFromEnumValue(CategoriaProduto, CategoriaProduto.PROCEDIMENTO)],
  },
  {
    path: 'cirurgias',
    matchPath: [enumNameFromEnumValue(CategoriaProduto, CategoriaProduto.CIRURGIA)],
  },
];

export function getProdutoLabel(categoria: CategoriaProduto): ProdutoLabel | null {
  return (
    PRODUTOS_LABEL.find((item) => {

      return (
        item.categoria === CategoriaProduto[categoria as unknown as keyof typeof CategoriaProduto]
      );
    }) ?? null
  );
}
