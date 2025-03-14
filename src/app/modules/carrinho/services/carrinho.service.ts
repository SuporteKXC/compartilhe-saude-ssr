import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { CarrinhoItem } from '../models/carrinho-item.model';
import { Observable, ReplaySubject, catchError, concatMap, map, of, take, throwError } from 'rxjs';
import { HttpClient, HttpContext, HttpErrorResponse } from '@angular/common/http';
import { LocalStorageService } from '../../shared/services/local-storage/local-storage.service';
import { CarrinhoLocalStorage } from '../models/carrinho-local-storage.model';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { AUTHENTICATED, SKIP_ERROR_MODAL } from 'src/app/core/interceptors/context/context';
import { ErrorModalService } from '../../shared/services/error-modal/error-modal.service';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  private static TTL_CARRINHO = environment.carrinho.ttl;
  private static LOCAL_STORAGE_KEY = 'carrinho';

  // gatilhos para carregar e atualizar
  private carrinhoLoaded$ = new ReplaySubject<void>(1);
  private carrinhoUpdated$ = new ReplaySubject<void>(1);

  private get carrinhoLocalStorage(): CarrinhoLocalStorage | null {
    const carrinhoLocalStorage: CarrinhoLocalStorage | null = JSON.parse(
      this.localStorageService.get(CarrinhoService.LOCAL_STORAGE_KEY) ?? 'null'
    );

    if (
      !carrinhoLocalStorage ||
      (carrinhoLocalStorage.expireIn &&
        carrinhoLocalStorage.updatedIn + carrinhoLocalStorage.expireIn >= Date.now())
    ) {
      // carrinho não existe ou expirou
      return null;
    }

    return carrinhoLocalStorage;
  }

  private get carrinho(): CarrinhoItem[] {
    return this.carrinhoLocalStorage?.carrinho ?? [];
  }

  private set carrinho(novoCarrinho: CarrinhoItem[]) {
    const carrinhoLocalStorage: CarrinhoLocalStorage = {
      carrinho: novoCarrinho.map((item, index) => ({ ...item, localStorageId: index })),
      updatedIn: Date.now(),
      expireIn: CarrinhoService.TTL_CARRINHO,
      updatedWhenLoggedIn: this.authService.verifyToken(),
    };

    this.localStorageService.set(
      CarrinhoService.LOCAL_STORAGE_KEY,
      JSON.stringify(carrinhoLocalStorage)
    );

    this.carrinhoUpdated$.next();
  }

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
    private authService: AuthService,
    private errorModalService: ErrorModalService,
    @Inject(PLATFORM_ID) private plataformId: string,
  ) {
    // limpar carrinho ao deslogar
    this.authService.didLogout$.subscribe(() => this.clearCarrinhoFromLocalStorage());

    if (isPlatformBrowser(this.plataformId)) {
      authService.user$.subscribe(() => {
        if (this.authService.verifyToken()) {
          this.http
            .get<CarrinhoItem[]>('carrinhos', {
              context: new HttpContext().set(AUTHENTICATED, true).set(SKIP_ERROR_MODAL, true),
            })
            .subscribe((c) => {
              // persistir carrinho mergeado no banco
              this.updateCarrinho(
                this.carrinhoLocalStorage?.updatedWhenLoggedIn
                  ? c
                  : this.mergeSameItems([...c, ...this.carrinho])
              ).subscribe();
    
              this.carrinhoLoaded$.next();
            });
        } else {
          this.carrinhoLoaded$.next();
          this.carrinhoUpdated$.next();
          this.validateCarrinho(true);
        }
    
        // verificar nomes desatualizados que ficaram salvos no localStorage do usuário
        this.updateLegacyNames();
      });
    }
  }

  public validateCarrinho(skipErrorModal: boolean) {

    this.getCarrinho().subscribe(carrinho => {
      if (carrinho.length > 0) {
        this.http
          .post<CarrinhoItem[]>('publico/carrinhos/validar', carrinho, {
            context: new HttpContext().set(SKIP_ERROR_MODAL, skipErrorModal),
          })
          .subscribe((carrinhoValidado) => {
            this.carrinho = carrinhoValidado;
          });
      }
    });
  }

  public getCarrinho(): Observable<CarrinhoItem[]> {
    return this.carrinhoLoaded$.pipe(
      take(1),
      map(() => this.carrinho)
    );
  }

  public getCarrinhoAndUpdates(): Observable<CarrinhoItem[]> {
    this.validateCarrinho(false);

    return this.carrinhoUpdated$.pipe(map(() => this.carrinho));
  }

  public updateCarrinho(novoCarrinho: CarrinhoItem[]): Observable<CarrinhoItem[]> {
    novoCarrinho = this.mergeSameItems(novoCarrinho);

    return this.carrinhoLoaded$.pipe(
      take(1),
      concatMap(() => {
        if (this.authService.verifyToken())
          return this.http.put<CarrinhoItem[]>('carrinhos', novoCarrinho, {
            context: new HttpContext().set(AUTHENTICATED, true),
          });
        else return of(null);
      }),
      map((c) => {
        if (c) this.carrinho = c;
        else this.carrinho = novoCarrinho;

        return this.carrinho;
      })
    );
  }

  public addToCarrinho(novoItem: CarrinhoItem): Observable<CarrinhoItem[]> {
    return this.updateCarrinho([...this.carrinho, novoItem]).pipe(
      catchError((error: HttpErrorResponse) => {
        this.errorModalService.open(error.error);
        return throwError(() => error);
      })
    );
  }

  public increaseQuantityByLocalStorageId(localStorageId: number): Observable<CarrinhoItem[]> {
    const novoCarrinho = this.carrinho.map((item) => {
      if (item.localStorageId === localStorageId) item.quantidade++;

      return item;
    });

    return this.updateCarrinho(novoCarrinho);
  }

  public decreaseQuantityByLocalStorageId(localStorageId: number): Observable<CarrinhoItem[]> {
    const novoCarrinho = this.carrinho.map((item) => {
      if (item.localStorageId === localStorageId) item.quantidade--;

      return item;
    });

    return this.updateCarrinho(novoCarrinho);
  }

  public removeByLocalStorageId(localStorageId: number): Observable<CarrinhoItem[]> {
    const novoCarrinho = this.carrinho.filter((item) => item.localStorageId !== localStorageId);

    return this.updateCarrinho(novoCarrinho);
  }

  public getTotalCarrinho() {
    return this.carrinhoLoaded$.pipe(
      take(1),
      map(() => {
        return this.calculateTotalCarrinho();
      })
    );
  }

  public getTotalCarrinhoAndUpdates() {
    return this.carrinhoUpdated$.pipe(
      map(() => {
        return this.calculateTotalCarrinho();
      })
    );
  }

  public getTotalItems() {
    return this.carrinhoLoaded$.pipe(
      take(1),
      map(() => {
        return this.calculateTotalItems();
      })
    );
  }

  public getTotalItemsAndUpdates() {
    return this.carrinhoUpdated$.pipe(
      map(() => {
        return this.calculateTotalItems();
      })
    );
  }

  public clearCarrinhoFromLocalStorage() {
    this.carrinho = [];
  }

  private mergeSameItems(carrinho: CarrinhoItem[]): CarrinhoItem[] {
    const mergedCarrinho: CarrinhoItem[] = [];

    for (const item of carrinho) {
      const sameItem = mergedCarrinho.find(
        (mergedItem) =>
          mergedItem.idProduto === item.idProduto &&
          mergedItem.localProduto.id === item.localProduto.id
      );

      if (sameItem) {
        sameItem.quantidade += item.quantidade;
      } else {
        mergedCarrinho.push(item);
      }
    }

    return mergedCarrinho;
  }

  private calculateTotalCarrinho(): number {
    return this.carrinho
      .map((item) => item.localProduto.valorVista * item.quantidade)
      .reduce((acumulado, valor) => acumulado + valor, 0);
  }

  private calculateTotalItems(): number {
    return this.carrinho
      .map((item) => item.quantidade)
      .reduce((acumulado, valor) => acumulado + valor, 0);
  }

  private updateLegacyNames() {
    // legacyName: newName
    const legacyNamesMap: {
      [key: string]: keyof CarrinhoItem;
    } = {
      localPacote: 'localProduto',
      idPacoteCheckup: 'idProduto',
    };

    // armazenar carrinho para evitar muitas chamadas ao getter
    let updatedCarrinho = this.carrinho;
    let shouldUpdate = false;

    for (const [legacyName, newName] of Object.entries(legacyNamesMap)) {
      updatedCarrinho = updatedCarrinho.map((item) => {
        if (Object.hasOwn(item, legacyName)) {
          (item[newName] as CarrinhoItem[keyof CarrinhoItem]) =
            item[legacyName as keyof CarrinhoItem];

          delete item[legacyName as keyof CarrinhoItem];

          shouldUpdate = true;
        }

        return item;
      });
    }

    // somente uma chamada para o setter, somente quando necessário
    if (shouldUpdate) this.carrinho = updatedCarrinho;
  }
}
