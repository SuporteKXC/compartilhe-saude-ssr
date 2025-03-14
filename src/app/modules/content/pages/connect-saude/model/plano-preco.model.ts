export interface PlanoPrecoDetalhes {
  nome: string,
  preco: number,
  descontoAnual?: number | null | undefined,
  recomendado: boolean,
  beneficios?: PlanoPrecoBeneficios[]
}

interface PlanoPrecoBeneficios {
  nome: string,
  incluso: boolean,
  tooltilp?: string,
}