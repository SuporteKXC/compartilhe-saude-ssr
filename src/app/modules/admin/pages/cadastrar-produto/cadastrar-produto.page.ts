import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { FormCadastrarProdutoService } from '../../services/form-cadastrar-produto/form-cadastrar-produto.service';
import { environment } from 'src/environments/environment';
import { ProdutoAdmin } from '../../models/produto-admin.model';
import { setImgPath } from 'src/app/modules/shared/functions/util/image-path';
import { ProdutosAdmService } from '../../services/produtos-adm/produtos-adm.service';
import { Preco } from 'src/app/modules/shared/models/produto/preco.model';
import { Produto } from 'src/app/modules/content/models/produto.model';
import { State } from 'src/app/modules/shared/services/navigation/models/state.type';
import { NavigationService } from 'src/app/modules/shared/services/navigation/navigation.service';
import { ProdutoState } from 'src/app/modules/content/models/produto-state-model';
import { CanComponentDeactivate } from 'src/app/core/guards/unsaved-changes/unsaved-changes.guard';
import { CategoriaProduto } from '../gestao-produtos/enums/CategoriaProduto';


@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.page.html',
  styleUrls: ['./cadastrar-produto.page.scss'],
  providers: [MessageService],
})
export class CadastrarProdutoPage implements OnInit, CanComponentDeactivate {
  public formTitulo!: string;
  public isLoading!: boolean;
  public precos!: Preco[];

  protected formProduto!: FormGroup;
  protected pathId!: number;
  protected categoriaProduto!: CategoriaProduto;
  protected ignoreGuard = false;
  protected produtosInteresse!: Produto[];

  protected returnPath = ['/', 'admin', 'dashboard', 'produtos-compartilhe'];

  protected breadcrumb: MenuItem[] = [
    {
      label: 'Home',
      routerLink: '/admin/dashboard'
    },
    {
      label: 'Produtos Compartilhe',
      routerLink: '/admin/dashboard/produtos-compartilhe'
    },
    {
      label: 'Cadastro Produtos Compartilhe',
    }
  ];

  constructor(
    protected formService: FormCadastrarProdutoService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private navigation: NavigationService,
    private produtosAdmService: ProdutosAdmService,
    private readonly cdr: ChangeDetectorRef
  ) {
    this.formProduto = this.formService.formProduto;

    this.pathId = this.activatedRoute.snapshot.params['id'];
    
    this.navigation.state$.subscribe((state: State<ProdutoState> | null) => {
      if (state) {
        navigation.clearState();
        this.formTitulo = state.categoria ?? '';
        this.categoriaProduto = state.categoria as CategoriaProduto;
      } else if (this.pathId) {
        this.ignoreGuard = true;
        router.navigate(['/', 'admin', 'dashboard', 'produtos-compartilhe']);
      } else {
        this.ignoreGuard = true;
        router.navigate(['/', 'admin', 'dashboard', 'produtos-compartilhe', 'cadastrar']);
      }
    });
  }

  ngOnInit(): void {
    this.formProduto.reset();
    this.formProduto.patchValue({ categoria: this.categoriaProduto });
    if (this.pathId) {
      this.produtosAdmService.obterProduto(this.pathId).subscribe(response => {
        this.produtosInteresse = response.produtosInteresse;
        this.formProduto.patchValue({
          ...response,
          pathImagem: setImgPath(environment.imgUrl, response.pathImagem),
        } as ProdutoAdmin);
        this.formService.togglePrecosRequireValidation(response.ativo);
        this.formService.save();
        this.cdr.detectChanges();
      });
      this.formService.save();
    }
  }

  canDeactivate() {
    return this.formService.isFormSaved || this.ignoreGuard;
  }

  public onSubmitCadastrar(event: SubmitEvent) {
    this.formService.save(event);

    const produto = this.formService.produto;
    this.produtosAdmService.cadastrarProduto(produto).subscribe({
      next: () => (this.isLoading = true),
      complete: () => {
        this.formService.onSaveSuccess({
          message: 'Cadastro realizado com sucesso!',
          onSendCallback: () => this.router.navigate(this.returnPath)
        });
      },
      error: () => (this.isLoading = false),
    });
  }

  public onSubmitAlterar(event: SubmitEvent) {
    this.formService.save(event);

    const produto = this.formService.produto;
    this.produtosAdmService.alterarProduto(this.pathId, produto).subscribe({
      next: () => (this.isLoading = true),
      complete: () => {
        this.formService.onSaveSuccess({
          message: 'Seus dados foram atualizados com sucesso!',
          onSendCallback: () => this.router.navigate(this.returnPath)
        });
      },
      error: () => (this.isLoading = false),
    });
  }
}
