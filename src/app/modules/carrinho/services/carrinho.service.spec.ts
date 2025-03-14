import { TestBed } from '@angular/core/testing';

import { CarrinhoService } from './carrinho.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LocalStorageService } from '../../shared/services/local-storage/local-storage.service';
import { TestScheduler } from 'rxjs/testing';
import { CarrinhoItem } from '../models/carrinho-item.model';
import { CarrinhoLocalStorage } from '../models/carrinho-local-storage.model';
import { of, Subject, tap } from 'rxjs';
import { DetalhesProduto } from '../../content/models/detalhes-produto.model';
import { ProdutoLocal } from '../../content/models/produto-local.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';

describe('CarrinhoService', () => {
  let service: CarrinhoService;
  let testScheduler: TestScheduler;
  let httpTestingController: HttpTestingController;

  const localStorageServiceMock = { get: jest.fn(), set: jest.fn() };

  const authServiceMock = {
    verifyToken: jest.fn(),
    didLogout$: new Subject(),
    user$: of(null),
  };

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      return expect(actual).toEqual(expected);
    });

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: LocalStorageService, useValue: localStorageServiceMock },
        { provide: AuthService, useValue: authServiceMock },
      ],
    });

    // reset carrinho
    delete window.localStorage['carrinho'];

    service = TestBed.inject(CarrinhoService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();

    jest.clearAllMocks();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    httpTestingController.match('carrinhos');
  });

  describe('Usuário logado', () => {
    beforeAll(() => {
      authServiceMock.verifyToken.mockReturnValue(true);
    });

    it('Deve carregar carrinho ao iniciar', () => {
      const carrinho: CarrinhoItem[] = [];

      const reqGet = httpTestingController.expectOne('carrinhos');
      reqGet.flush(carrinho);
      const reqUpdate = httpTestingController.expectOne('carrinhos');
      reqUpdate.flush(carrinho);

      const carrinhoArgument: CarrinhoLocalStorage = JSON.parse(
        localStorageServiceMock.set.mock.lastCall?.[1]
      );

      expect(carrinhoArgument.carrinho).toStrictEqual(carrinho);
      expect(carrinhoArgument.updatedIn).toBeLessThanOrEqual(Date.now());
      expect(carrinhoArgument.expireIn).toBe(CarrinhoService['TTL_CARRINHO']);
    });

    it('Deve retornar carrinho somente após este ser carregado', () => {
      const carrinho: CarrinhoItem[] = [];

      const expectedMarbles = '--(a|)';
      const expectedValues = {
        a: carrinho,
      };

      const req = httpTestingController.expectOne('carrinhos');

      const triggerMarbles = '--a';
      const triggerValues = {
        a: () => req.flush(carrinho),
      };

      testScheduler.run(({ expectObservable, cold, flush }) => {
        expectObservable(service.getCarrinho()).toBe(expectedMarbles, expectedValues);

        expectObservable(cold(triggerMarbles, triggerValues).pipe(tap((fn) => fn())));

        flush();

        expect(localStorageServiceMock.get).toHaveBeenCalledWith(
          CarrinhoService['LOCAL_STORAGE_KEY']
        );

        httpTestingController.expectOne('carrinhos');
      });
    });

    it('Deve atualizar o carrinho somente após este ser carregado', () => {
      const carrinho: CarrinhoItem[] = [];
      const novoCarrinho: CarrinhoItem[] = [
        {
          id: 1,
          idProduto: 2,
          localStorageId: 0,
          nome: 'nome',
          descricao: 'descricao',
          quantidade: 2,
          localProduto: {} as ProdutoLocal,
          pathImagem: 'pathImagem',
        },
      ];

      localStorageServiceMock.get.mockReturnValue(JSON.stringify({ carrinho: novoCarrinho }));

      const reqGet = httpTestingController.expectOne('carrinhos');

      const triggerMarbles = '--a';
      const triggerValues = {
        a: () => reqGet.flush(carrinho),
      };

      testScheduler.run(({ expectObservable, cold, flush }) => {
        service
          .updateCarrinho(novoCarrinho)
          .subscribe((c) => {
            expect(c).toStrictEqual(novoCarrinho);
            expectObservable(cold(triggerMarbles, triggerValues).pipe(tap((fn) => fn())));

            flush();

            const reqPut = httpTestingController.match('carrinhos');
            reqPut[1].flush(carrinho);

            expect(localStorageServiceMock.set).toHaveBeenCalledWith(
              CarrinhoService['LOCAL_STORAGE_KEY'],
              expect.stringContaining(JSON.stringify(novoCarrinho))
            );
          });
      });
    });

    it('Deve retornar carrinho atualizado a cada mudança', () => {
      const carrinho: CarrinhoItem[] = [];
      const novoCarrinho: CarrinhoItem[] = [
        {
          produto: {} as DetalhesProduto,
          dataHoraInclusao: new Date().toISOString(),
          quantidade: 2,
        } as unknown as CarrinhoItem,
      ];

      const expectedMarbles = '--a--b';
      const expectedValues = {
        a: carrinho,
        b: novoCarrinho,
      };

      const req = httpTestingController.expectOne('carrinhos');

      const triggerMarbles = '--a--b';
      const triggerValues = {
        a: () => {
          localStorageServiceMock.get.mockReturnValue(JSON.stringify({ carrinho }));
          req.flush(carrinho);

          const updateRequest = httpTestingController.expectOne('carrinhos');
          updateRequest.flush(carrinho);
        },
        b: () => {
          localStorageServiceMock.get.mockReturnValue(JSON.stringify({ carrinho: novoCarrinho }));

          service.updateCarrinho(novoCarrinho).subscribe();

          const updateRequest = httpTestingController.expectOne('carrinhos');
          updateRequest.flush(carrinho);
        },
      };

      testScheduler.run(({ expectObservable, cold, flush }) => {
        expectObservable(service.getCarrinhoAndUpdates()).toBe(expectedMarbles, expectedValues);

        expectObservable(cold(triggerMarbles, triggerValues).pipe(tap((fn) => fn())));

        flush();
      });
    });

    it('Deve retornar carrinho vazio se expirado', () => {
      const carrinho: CarrinhoItem[] = [
        {
          id: 1,
          idProduto: 2,
          nome: 'nome',
          descricao: 'descricao',
          quantidade: 2,
          localProduto: {} as ProdutoLocal,
          pathImagem: 'pathImagem',
        },
      ];

      const reqGet = httpTestingController.expectOne('carrinhos');
      reqGet.flush(carrinho);
      const reqUpdate = httpTestingController.expectOne('carrinhos');
      reqUpdate.flush(carrinho);

      localStorageServiceMock.get.mockReturnValue(
        JSON.stringify({
          carrinho,
          updatedIn: Date.now() - 2000, // 2 segundos atrás
          expireIn: Date.now() - 1000, // expirou 1 segundo atrás
        } as CarrinhoLocalStorage)
      );

      service.getCarrinho().subscribe((c) => expect(c).toStrictEqual([]));
    });

    it('Deve unir items iguais (mesmo produto, mesmo local), apenas aumentando a quantidade em um', () => {
      const carrinho: CarrinhoItem[] = [
        {
          id: 1,
          idProduto: 2,
          nome: 'nome',
          descricao: 'descricao',
          quantidade: 1,
          localProduto: { nomeEstabelecimento: 'Nome 1' } as ProdutoLocal,
          pathImagem: 'pathImagem',
        },
      ];

      const novoItem: CarrinhoItem = {
        id: 2,
        idProduto: 2,
        nome: 'nome',
        descricao: 'descricao',
        quantidade: 1,
        localProduto: { nomeEstabelecimento: 'Nome 1' } as ProdutoLocal,
        pathImagem: 'pathImagem',
      };

      const novoCarrinho: CarrinhoItem[] = [
        {
          id: 1,
          idProduto: 2,
          nome: 'nome',
          descricao: 'descricao',
          quantidade: 2,
          localProduto: { nomeEstabelecimento: 'Nome 1' } as ProdutoLocal,
          pathImagem: 'pathImagem',
          localStorageId: 0,
        },
      ];

      localStorageServiceMock.get
        .mockReturnValueOnce(JSON.stringify({ carrinho }))
        .mockReturnValueOnce(JSON.stringify({ carrinho }))
        .mockReturnValueOnce(JSON.stringify({ carrinho }))
        .mockReturnValue(JSON.stringify({ carrinho: novoCarrinho }));

      const reqGet = httpTestingController.expectOne('carrinhos');

      const triggerMarbles = '--a';
      const triggerValues = {
        a: () => {
          reqGet.flush(carrinho);

          const requests = httpTestingController.match('carrinhos');
          requests[0].flush(carrinho);
          requests[1].flush(novoCarrinho);
        },
      };

      testScheduler.run(({ expectObservable, cold, flush }) => {
        service.addToCarrinho(novoItem).subscribe((c) => {
          expect(c.length).toBe(1);
          expect(c[0].quantidade).toBe(2);
        });

        expectObservable(cold(triggerMarbles, triggerValues).pipe(tap((fn) => fn())));

        flush();

        expect(localStorageServiceMock.set).toHaveBeenLastCalledWith(
          CarrinhoService['LOCAL_STORAGE_KEY'],
          expect.stringContaining(JSON.stringify(novoCarrinho))
        );
      });
    });

    it('Não deve unir items do mesmo produto mas locais diferentes', () => {
      const carrinho: CarrinhoItem[] = [
        {
          id: 1,
          idProduto: 2,
          nome: 'nome',
          descricao: 'descricao',
          quantidade: 1,
          localProduto: { id: 0, nomeEstabelecimento: 'Nome 1' } as ProdutoLocal,
          pathImagem: 'pathImagem',
        },
      ];

      const novoItem: CarrinhoItem = {
        id: 1,
        idProduto: 2,
        nome: 'nome',
        descricao: 'descricao',
        quantidade: 1,
        localProduto: { id: 1, nomeEstabelecimento: 'Nome 2' } as ProdutoLocal,
        pathImagem: 'pathImagem',
      };

      const novoCarrinho: CarrinhoItem[] = [
        {
          id: 1,
          idProduto: 2,
          nome: 'nome',
          descricao: 'descricao',
          quantidade: 1,
          localProduto: { id: 0, nomeEstabelecimento: 'Nome 1' } as ProdutoLocal,
          pathImagem: 'pathImagem',
          localStorageId: 0,
        },
        {
          id: 1,
          idProduto: 2,
          nome: 'nome',
          descricao: 'descricao',
          quantidade: 1,
          localProduto: { id: 1, nomeEstabelecimento: 'Nome 2' } as ProdutoLocal,
          pathImagem: 'pathImagem',
          localStorageId: 1,
        },
      ];

      localStorageServiceMock.get
        .mockReturnValueOnce(JSON.stringify({ carrinho, updatedWhenLoggedIn: true }))
        .mockReturnValueOnce(JSON.stringify({ carrinho, updatedWhenLoggedIn: true }))
        .mockReturnValueOnce(JSON.stringify({ carrinho, updatedWhenLoggedIn: true }))
        .mockReturnValue(JSON.stringify({ carrinho: novoCarrinho }));

      const reqGet = httpTestingController.expectOne('carrinhos');
      reqGet.flush(carrinho);

      const triggerMarbles = '--a';
      const triggerValues = {
        a: () => {
          const requests = httpTestingController.match('carrinhos');
          requests[0].flush(carrinho);
          requests[1].flush(novoCarrinho);
        },
      };

      testScheduler.run(({ expectObservable, cold, flush }) => {
        service.addToCarrinho(novoItem).subscribe((c) => {
          expect(c.length).toBe(2);
          expect(c[0].quantidade).toBe(1);
          expect(c[1].quantidade).toBe(1);
        });

        expectObservable(cold(triggerMarbles, triggerValues).pipe(tap((fn) => fn())));

        flush();

        expect(localStorageServiceMock.set).toHaveBeenLastCalledWith(
          CarrinhoService['LOCAL_STORAGE_KEY'],
          expect.stringContaining(JSON.stringify(novoCarrinho))
        );
      });
    });
  });

  describe('Usuário deslogado', () => {
    beforeAll(() => {
      authServiceMock.verifyToken.mockReturnValue(false);
    });

    it('Deve fazer uma requisição ao iniciar para validar o carrinho', () => {
      expect(service).toBeTruthy();

      const carrinho: CarrinhoItem[] = [
        {
          id: 1,
          idProduto: 2,
          nome: 'nome',
          descricao: 'descricao',
          quantidade: 1,
          localProduto: { id: 0, nomeEstabelecimento: 'Nome 1' } as ProdutoLocal,
          pathImagem: 'pathImagem',
        },
      ];

      service.updateCarrinho(carrinho).subscribe(() => {
        httpTestingController.expectOne('publico/carrinhos/validar');
      });
    });

    it('Não deve fazer uma requisição para validar quando não houver carrinho', () => {
      expect(service).toBeTruthy();

      service.updateCarrinho([]).subscribe(() => {
        httpTestingController.expectNone('publico/carrinhos/validar');
      });
    });
  });
});
