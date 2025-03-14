import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  DoCheck,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
  PLATFORM_ID,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { ACCORDION_ANIMATION } from 'src/app/modules/shared/constants/animations';
import { UserGroup } from 'src/app/modules/shared/enums/user-group';
import {
  ActiveRoute,
  NavBarItem,
  SubRouteItem,
  anyItemSubrouteActive,
  isSubrouteItem,
  shouldItemBeActive,
} from 'src/app/modules/shared/models/navbar-items.model';
import { User } from 'src/app/modules/shared/models/user.model';
import { LinkWhatsappService } from 'src/app/modules/shared/services/link-whatsapp/link-whatsapp.service';

@Component({
  selector: 'app-desktop-links',
  templateUrl: './desktop-links.component.html',
  styleUrls: ['./desktop-links.component.scss'],
})
export class DesktopLinksComponent implements OnInit, DoCheck {
  @ViewChildren(Menu) menus!: QueryList<Menu>;

  @Input() menuItems!: NavBarItem[];
  @Input() userItems!: NavBarItem[];

  @Input() user!: User | null;

  @Input() activeRoute!: string;
  @Input() isOdontologia!: boolean;
  @Input() isConnectSaude!: boolean;

  // HACK: Primeng/Angular bug workaround
  @Input() accordionFix = false;
  @Input() accordionAnimation = ACCORDION_ANIMATION;

  @Output() sair = new EventEmitter();

  public menuUsuarioItens!: MenuItem[];
  public isSubrouteItem = isSubrouteItem;
  public anyItemSubrouteActive = anyItemSubrouteActive;
  public shouldItemBeActive = shouldItemBeActive;

  protected isBrowser = false;

  constructor(
    private router: Router,
    protected authService: AuthService,
    private whatsappService: LinkWhatsappService,
    @Inject(PLATFORM_ID) private plataformId: string,
  ) { }

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.plataformId);

    this.menuItems.forEach((item) => {
      if (this.isSubrouteItem(item)) {
        item.menuModel = this.getMenuModelFromSubRouteItem(item);
      }
    });

    if (isPlatformBrowser(this.plataformId)) {
      this.authService.user$.subscribe(() => {
        if (this.authService.userHasGroup(UserGroup.ADMIN)) {
          const hasItem = this.userItems.some(item => item.label === 'Dashboard Admin');

          if (!hasItem) {
            this.userItems.push({
              label: 'Dashboard Admin',
              path: '/admin/dashboard',
              datatestid: 'menu-item-dashboard-admin',
            });
          }
        }
        this.menuUsuarioItens = this.buildUserMenuModel();
      });
    }
    this.menuUsuarioItens = this.buildUserMenuModel();
  }

  ngDoCheck(): void {
    // Resolve o problema apresentado no componente p-menu do primeNg
    // https://dequeuniversity.com/rules/axe/4.1/aria-hidden-focus

    this.activeRoute = this.router.url;

    this.isConnectSaude = this.activeRoute.includes('connect-saude');

    const isBrowser = isPlatformBrowser(PLATFORM_ID);

    if (isBrowser) {
      const submenuItens = document.getElementsByClassName('p-menuitem-link');
      if (submenuItens.length > 0) {
        for (let i = 0; i < submenuItens.length; i++) {
          submenuItens.item(i)?.setAttribute('aria-hidden', 'false');
        }
      }
    }
  }

  public getMenuModelFromSubRouteItem(item: SubRouteItem): MenuItem[] {
    return item.subRoutes.map((activeRoute) => ({
      label: activeRoute.label,
      routerLink: activeRoute.path,
    }));
  }

  public buildUserMenuModel(): MenuItem[] {
    if (!this.userItems || this.userItems.length === 0) {
      return [];
    }

    return [
      ...this.userItems.map((item) => ({
        label: item.label,
        routerLink: (item as ActiveRoute).path,
      })),
      { label: 'Sair', command: () => this.sair.emit() },
    ];
  }

  public toggleMenu(event: Event, menu: Menu): void {
    for (const otherMenu of this.menus.filter((m) => m.el !== menu.el)) otherMenu.hide();

    menu.toggle(event);
  }

  public openMenu(event: Event, menu: Menu): void {
    for (const otherMenu of this.menus.filter((m) => m.el !== menu.el)) otherMenu.hide();

    menu.show(event);
  }

  navigateToCadastrar() {
    this.router.navigate(['usuarios', 'pre-cadastro']);
  }

  getWhatsappLink() {
    const mensagem = 'Olá, gostaria de mais informações sobre a assinatura do connect saúde.';
    const numero = '5527997513968';
    return this.whatsappService.gerarLink(mensagem, numero);
  }
}


