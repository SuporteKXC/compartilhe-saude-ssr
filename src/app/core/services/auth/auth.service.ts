import { OAuthErrorEvent, OAuthService } from 'angular-oauth2-oidc';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { User } from 'src/app/modules/shared/models/user.model';
import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmationModalComponent } from 'src/app/modules/shared/components/modals/confirmation-modal/confirmation-modal.component';
import { BehaviorSubject, Subject } from 'rxjs';
import { UserGroup } from 'src/app/modules/shared/enums/user-group';
import { isPlatformBrowser } from '@angular/common';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public readonly didLogout$ = new Subject<boolean>();
  public readonly user$ = new BehaviorSubject<User | null>(null);

  private auth = environment.auth;
  private name = environment.name;

  constructor(
    private oauthService: OAuthService,
    public dialogService: DialogService,
    @Inject(PLATFORM_ID) private plataformId: string
  ) { 
    
  }

  async configure() {
    const clockSkewInSec = 2 * 60;

    this.oauthService.configure({
      issuer: `${this.auth.server}/realms/${this.auth.realm}`,
      clientId: this.auth.clientId,
      redirectUri: `${window.location.origin}/auth`,
      scope: 'openid profile offline_access',
      requireHttps: this.auth.requireHttps,
      requestAccessToken: true,

      // HACK: A biblioteca tem um bug conhecido há algum tempo em que o sinal do clock skew está errado,
      // o que faz com que um token expirado continue sendo considerado válido
      // Mesmo assim, não é possível utilizar valores negativos por conta de outras verificações feitas pela biblioteca.
      // Para contornar este problema, o criador da biblioteca adicionou a propriedade `decreaseExpirationBySec`
      // Mais informações em: https://github.com/manfredsteyer/angular-oauth2-oidc/issues/1135
      clockSkewInSec, // 2 minutos

      // HACK: embora o nome indique que o valor é em segundos, a biblioteca considera este valor como milissegundos
      // Esse valor existe para que o clockSkew não prolongue mais do que deve a validade do token,
      // e se limite a permitir que relógios atrasados consigam fazer o login normalmente
      // Se o skew posterga o tempo de vida do token, a aplicação pode tentar fazer o refresh com um token já expirado,
      // que falhará.
      decreaseExpirationBySec: clockSkewInSec * 1000, // 2 minutos
    });

    this.oauthService.setStorage(localStorage);
    this.oauthService.setupAutomaticSilentRefresh();

    if (isPlatformBrowser(this.plataformId)) {
      this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
        if (this.oauthService.hasValidAccessToken()) {
          this.oauthService.loadUserProfile().then((e) => this.user$.next(e as User));
        } else {
          // Se não há token válido, limpar os tokens e dados salvos no local storage
          // Passando true a fim de não redirecionar para a página do keyclaok e somente limpar os dados
          this.oauthService.logOut(true);
        }
      }).catch(err => {
        if (this.name !== 'prod') {
          console.error('Erro no OAuth:', err);
        }
        new OAuthErrorEvent('discovery_document_load_error', err);
      });
    }
  }

  login(path?: string) {
    if (path) localStorage.setItem('path', path);
    this.oauthService.initLoginFlow();
  }

  logout() {
    const modalReference = this.dialogService.open(ConfirmationModalComponent, {
      data: { mensagem: 'Tem certeza que deseja sair?' },
      styleClass: 'confirmation-modal',
    });

    modalReference.onClose.subscribe((confirmado) => {
      if (confirmado) {
        this.didLogout$.next(true);
        localStorage.removeItem('path');

        this.oauthService.postLogoutRedirectUri = window.location.origin; // retornar para a home
        this.oauthService.logOut({
          client_id: this.oauthService.clientId,
          id_token_hint: this.oauthService.getIdToken(),
        });
      }
    });
  }

  getUserInfo(): User | null {
    if (isPlatformBrowser(this.plataformId)) {
      const claims = this.oauthService.getIdentityClaims();
      return claims as User;
    }
    return null;
  }

  userHasGroup(group: UserGroup): boolean {
    return this.getUserInfo()?.groups.includes(group) ?? false;
  }

  verifyToken() {
    return this.oauthService.hasValidAccessToken();
  }

  getAccessToken() {
    return this.oauthService.getAccessToken();
  }

  isAccessTokenExpiration() {
    if (!this.oauthService.getAccessToken()) return false;

    const expTimestamp = this.oauthService.getAccessTokenExpiration();
    const currentTimestamp = Date.now();
    return expTimestamp < currentTimestamp;
  }

  getEvents() {
    return this.oauthService.events;
  }
}
