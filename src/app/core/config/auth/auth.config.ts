import { OAuthService } from 'angular-oauth2-oidc/oauth-service';
import { environment } from '../../../../environments/environment';
import { OAuthErrorEvent } from 'angular-oauth2-oidc';

export function configureAuthentication(oauthService: OAuthService): () => Promise<void> {
  return async () => {
    oauthService.setStorage(localStorage);

    const { auth } = environment;

    const clockSkewInSec = 2 * 60; // 2 minutos

    oauthService.configure({
      issuer: `${auth.server}/realms/${auth.realm}`,
      clientId: auth.clientId,
      scope: 'openid profile offline_access',
      requireHttps: auth.requireHttps,
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

    try {
      await oauthService.loadDiscoveryDocumentAndTryLogin();
      if (oauthService.hasValidAccessToken()) {
        await oauthService.loadUserProfile();
      } else {
        // Se não há token válido, limpar os tokens e dados salvos no local storage
        // Passando true a fim de não redirecionar para a página do keyclaok e somente limpar os dados
        oauthService.logOut(true);
      }

      oauthService.setupAutomaticSilentRefresh();
    } catch (err) {
      new OAuthErrorEvent('discovery_document_load_error', {});
    }
  };
}
