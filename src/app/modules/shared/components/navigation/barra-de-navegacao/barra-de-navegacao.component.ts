import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ACCORDION_ANIMATION } from 'src/app/modules/shared/constants/animations';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { NavBarItem } from '../../../models/navbar-items.model';
import { User } from '../../../models/user.model';
import { VideoModalService } from '../../modals/video-modal/services/video-modal/video-modal.service';
import { CONTENT_MENU_ITEMS } from './constants/content-menu-items.constant';
import { CONNECT_SAUDE_MENU_ITEMS } from './constants/connect-saude-menu-items.constant';
import { USER_MENU_ITEMS } from './constants/user-menu-items.constant';
import { LinkWhatsappService } from '../../../services/link-whatsapp/link-whatsapp.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-barra-de-navegacao',
  templateUrl: './barra-de-navegacao.component.html',
  styleUrls: ['./barra-de-navegacao.component.scss'],
})
export class BarraDeNavegacaoComponent implements OnInit {
  @Input() menuItems: NavBarItem[] = [...CONTENT_MENU_ITEMS];
  @Input() userItems: NavBarItem[] = [...USER_MENU_ITEMS];
  @Input() connectSaudeItems: NavBarItem[] = [...CONNECT_SAUDE_MENU_ITEMS];

  @Input() imageName!: string;

  public user: User | null = null;
  public activeRoute!: string;
  public isOdontologia = false;
  public isConnectSaude!: boolean;
  public isVisible = false;

  public pathImage = environment.imgUrl;
  public pathVideo = environment.videoPath;

  // HACK: Primeng/Angular bug workaround
  public accordionFix = false;
  public accordionAnimation = ACCORDION_ANIMATION;

  constructor(
    private router: Router,
    private authService: AuthService,
    private videoModalService: VideoModalService,
    private whatsappService: LinkWhatsappService,
    @Inject(PLATFORM_ID) private plataformId: string,
  ) { }
  
  ngOnInit(): void {
    if (this.pathVideo) {
      this.connectSaudeItems.unshift({
        label: 'Como Funciona',
        datatestid: 'menu-item-como-funciona',
        handleClick: () => {
          this.openVideoModal();
        }
      });
    } else {
      this.connectSaudeItems.unshift({
        label: 'Como Funciona',
        datatestid: 'menu-item-como-funciona',
        href: this.getWhatsAppLink()
      });
    }

    if (isPlatformBrowser(this.plataformId)) {
      this.authService.user$.subscribe(() => {
        this.user = this.authService.getUserInfo();
      });
    }
    
    this.authService.didLogout$.subscribe(() => this.user = null);

    this.checkRoute();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) this.checkRoute();
    });
  }

  checkRoute() {
    this.activeRoute = this.router.url;
    // Página da compartilhe sorrisos foi desativada, mas o código deve ser mantido
    // this.isOdontologia = this.activeRoute === '/odontologia';
    this.isConnectSaude = this.activeRoute.includes('planos-connect-saude');
  }

  toggleMenu() {
    // HACK: Primeng/Angular bug workaround
    // https://github.com/primefaces/primeng/issues/9453#issuecomment-1286562242
    this.accordionAnimation = '0ms';
    setTimeout(() => {
      this.accordionFix = true;
      setTimeout(() => {
        this.accordionFix = false;
        setTimeout(() => {
          this.accordionAnimation = ACCORDION_ANIMATION;
        });
      });
    });

    this.isVisible = !this.isVisible;
  }

  get imgData() {
    const logoSorrisos = '/LOGO+COMPARTILHE+SORRISOS.png';
    const logoSaude = '/assets/Images/logo-compartilhe.png';

    const sorrisos = {
      src: logoSorrisos,
      alt: 'Compartilhe Sorrisos',
      title: 'Compartilhe Sorrisos'
    };

    const saude = {
      src: logoSaude,
      alt: 'Compartilhe Saúde',
      title: 'Compartilhe Saúde'
    };

    return this.isOdontologia ? sorrisos : saude;
  }

  getLink() {
    return this.isOdontologia ? 'odontologia' : '';
  }

  navigateToCarrinho() {
    this.router.navigate(['carrinho']);
  }

  navigateToAssineAgora() {
    this.router.navigate(['/assine-agora']);
  }

  logout() {
    this.authService.logout();
  }

  openVideoModal() {
    const videoConfig = {
      url: this.pathVideo,
      title: 'Como Funciona',
    };

    this.videoModalService.open(videoConfig);
  }

  getWhatsAppLink() {
    const mensagem = 'Olá, gostaria de mais informações sobre a assinatura do connect saúde.';
    const numero = '5527997513968';
    return this.whatsappService.gerarLink(mensagem, numero);
  }
}
