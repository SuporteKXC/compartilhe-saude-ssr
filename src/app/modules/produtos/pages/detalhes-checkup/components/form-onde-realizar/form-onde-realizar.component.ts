import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarrinhoItem } from 'src/app/modules/carrinho/models/carrinho-item.model';
import { CarrinhoService } from 'src/app/modules/carrinho/services/carrinho.service';
import { DetalhesProduto } from 'src/app/modules/content/models/detalhes-produto.model';
import { ProdutoLocal } from 'src/app/modules/content/models/produto-local.model';
import { ProdutoState } from 'src/app/modules/content/models/produto-state-model';
import { SelectOption } from 'src/app/modules/shared/components/form/select/models/select-option.model';
import { FormaAtendimentoEnum } from 'src/app/modules/shared/enums/forma-atendimento.enum';
import { State } from 'src/app/modules/shared/services/navigation/models/state.type';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-form-onde-realizar',
  templateUrl: './form-onde-realizar.component.html',
  styleUrls: ['./form-onde-realizar.component.scss']
})
export class FormOndeRealizarComponent implements OnInit, OnChanges {
  @Input() detalhesProduto!: DetalhesProduto;
  @Input() state!: State<ProdutoState>;

  protected localProduto!: ProdutoLocal | null;
  protected localOptions: SelectOption<ProdutoState>[] = [];
  protected numeroParcelas: number = environment.numeroParcelas;

  protected formLocalAtendimento = this.fb.group({
    local: this.fb.control<ProdutoState | null>(null, { validators: Validators.required })
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private carrinhoService: CarrinhoService,
  ) { }

  ngOnInit(): void {
    if (this.detalhesProduto?.locais) {
      this.popularLocalOptions();

      if (this.state) {
        this.localControl?.setValue({
          idParceiro: this.state.idParceiro ?? null,
          formaAtendimento: this.state.formaAtendimento?.toUpperCase() as FormaAtendimentoEnum
        });

        this.setValores();
      }

      if (this.isArrayOfOne) {
        this.localControl?.setValue({
          idParceiro: this.localOptions[0].value.idParceiro,
          formaAtendimento: this.localOptions[0].value.formaAtendimento
        });

        this.setValores();
      }
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['detalhesProduto']) {
      this.resetValores();
    }
  }

  private get localControl() {
    return this.formLocalAtendimento.get('local');
  }

  protected get isArrayOfOne() {
    return this.localOptions.length === 1;
  }

  popularLocalOptions() {
    this.localOptions = this.detalhesProduto.locais.map(local => {
      const idParceiro = local.idParceiroProfissional ?? local.idParceiroEstabelecimento;

      if (local.endereco) {
        return {
          label: `${local.nomeProfissional ?? local.nomeEstabelecimento} - ${local.endereco.siglaUf}`,
          value: { idParceiro, formaAtendimento: local.formaAtendimento }
        };
      }
      return {
        label: `${local.nomeProfissional} - On-line`,
        value: { idParceiro, formaAtendimento: local.formaAtendimento }
      };
    });
  }

  setValores() {
    const option = this.localControl?.value;
    this.localProduto = this.detalhesProduto.locais.find(local => {
      const id = option?.idParceiro;
      const formaAtendimentoSelecionada = option?.formaAtendimento;

      const idEstabelecimento = local.idParceiroEstabelecimento;
      const idProfissional = local.idParceiroProfissional;
      const formaAtendimento = local.formaAtendimento;

      return (idEstabelecimento === id || idProfissional === id) && formaAtendimentoSelecionada == formaAtendimento;
    }) ?? null;
  }

  resetValores() {
    this.formLocalAtendimento.reset();
    this.localProduto = null;
    this.popularLocalOptions();
  }

  adicionarItemCarrinho() {
    if (this.localProduto) {
      const novoItemCarrinho: CarrinhoItem = {
        id: null,
        idProduto: this.detalhesProduto.id,
        nome: this.detalhesProduto.nome,
        descricao: this.detalhesProduto.descricao,
        localProduto: this.localProduto,
        pathImagem: this.detalhesProduto.pathImagem,
        quantidade: 1,
      };

      this.carrinhoService.addToCarrinho(novoItemCarrinho).subscribe(
        () => this.router.navigate(['carrinho'])
      );
    }
  }
}
