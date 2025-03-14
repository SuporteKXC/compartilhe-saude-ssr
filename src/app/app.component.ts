import { Component, Inject, NgZone, OnInit, PLATFORM_ID } from '@angular/core';
import { AdoptService } from './modules/shared/services/adopt/adopt-service';
import { HotjarService } from './modules/shared/services/hotjar/hotjar.service';
import { environment } from 'src/environments/environment';
import { Meta, Title } from '@angular/platform-browser';
import { PrimeNGConfig } from 'primeng/api';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, interval, map, mergeMap } from 'rxjs';
import { AuthService } from './core/services/auth/auth.service';
import { CarrinhoService } from './modules/carrinho/services/carrinho.service';
import { isPlatformBrowser } from '@angular/common';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    adoptService: AdoptService,
    hotjarService: HotjarService,
    primengConfig: PrimeNGConfig,
    private meta: Meta,
    private router: Router,
    private titleService: Title,
    private route: ActivatedRoute,
    private authService: AuthService,
    private oAuthService: OAuthService,
    private carrinhoService: CarrinhoService,
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) private plataformId: string,
  ) {
    if (isPlatformBrowser(plataformId)) {
      meta.addTags([
        { property: 'og:image', content: environment.imgUrl + '/assets/Images/logo-compartilhe.png' },
        { property: 'og:secure_url', content: environment.imgUrl },
        { property: 'og:url', content: window.location.origin },
      ]);

      hotjarService.init();
    }

    if (environment.name !== 'prod') meta.addTag({ property: 'robots', content: 'noindex' });

    primengConfig.setTranslation({
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
      dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
      monthNames: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
      ],
      monthNamesShort: [
        'Jan',
        'Fev',
        'Mar',
        'Abr',
        'Mai',
        'Jun',
        'Jul',
        'Ago',
        'Set',
        'Out',
        'Nov',
        'Dez',
      ],
      dateFormat: 'dd/mm/yy',
    });
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.route),
      map((route) => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data)
    )
      .subscribe((event) => {
        const pageTitle = event['title'];
        const defaultPageTitle = 'Seja Compartilhe Saúde: sua plataforma completa de serviços de saúde';
        const defaultMetaDescription = 'Seja Compartilhe Saúde: sua plataforma completa de serviços de saúde';

        const metaDescription = event['metaDescription'];
        this.titleService.setTitle(pageTitle || defaultPageTitle);
        if (metaDescription) {
          this.meta.updateTag({ name: 'description', content: metaDescription });
        } else {
          this.meta.updateTag({ name: 'description', content: defaultMetaDescription });
        }
      });

    if (isPlatformBrowser(this.plataformId)) {
      this.authService.configure();
    }

    this.ngZone.runOutsideAngular(() => {
      if (isPlatformBrowser(this.plataformId)) {
        this.check();
      }
    });
  }

  check() {
    const subscribe = interval(500).subscribe(() => {
      if (!this.authService.verifyToken() && this.authService.isAccessTokenExpiration()) {
        this.carrinhoService.clearCarrinhoFromLocalStorage();
        localStorage.removeItem('path');
        subscribe.unsubscribe();
        window.location.reload();
      }
    });
  }
}