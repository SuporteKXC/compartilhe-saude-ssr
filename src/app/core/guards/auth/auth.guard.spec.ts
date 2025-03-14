import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserGroup } from 'src/app/modules/shared/enums/user-group';
import { authGuard } from './auth.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../../services/auth/auth.service';
import { Observable, of } from 'rxjs';

describe('Auth Guard', () => {
  const mockRouteSnapshot = null as unknown as ActivatedRouteSnapshot;
  const mockRouteState = null as unknown as RouterStateSnapshot;

  const callAuthGuardFunction = (allowedGroups: UserGroup[]) =>
    authGuard(allowedGroups)(mockRouteSnapshot, mockRouteState);

  const authServiceMock = {
    userHasGroup: jest.fn(),
    verifyToken: jest.fn(),
    user$: of(null),
    configure: jest.fn()
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [{ provide: AuthService, useValue: authServiceMock }],
    });
  });

  it('Não deve permitir usuário deslogado', () => {
    authServiceMock.verifyToken.mockReturnValue(false);
    authServiceMock.userHasGroup.mockReturnValue(true);

    TestBed.runInInjectionContext(() => {
      const result = callAuthGuardFunction([UserGroup.ADMIN, UserGroup.PACIENTE]) as Observable<any>;

      result.subscribe((result: Partial<UrlTree>) => {
        expect(result).toMatchObject<Partial<UrlTree>>({
          fragment: null,
        });
      });
    });
  });

  it('Não deve permitir usuário logado sem grupo permitido', () => {
    authServiceMock.verifyToken.mockReturnValue(true);
    authServiceMock.userHasGroup.mockImplementation(
      (group: UserGroup) => group === UserGroup.PACIENTE
    );

    TestBed.runInInjectionContext(() => {
      const result = callAuthGuardFunction([UserGroup.ADMIN]) as Observable<any>;

      result.subscribe((result: Partial<UrlTree>) => {
        expect(result).toMatchObject<Partial<UrlTree>>({
          fragment: null,
        });
      });
    });
  });

  it('Deve permitir usuário logado com grupo permitido', () => {
    authServiceMock.verifyToken.mockReturnValue(true);
    authServiceMock.userHasGroup.mockImplementation(
      (group: UserGroup) => group === UserGroup.PACIENTE
    );

    TestBed.runInInjectionContext(() => {
      const result = callAuthGuardFunction([UserGroup.ADMIN, UserGroup.PACIENTE]) as Observable<any>;

      result.subscribe((result: Partial<UrlTree>) => {
        expect(result).toBe(true);
      });
    });
  });
});
