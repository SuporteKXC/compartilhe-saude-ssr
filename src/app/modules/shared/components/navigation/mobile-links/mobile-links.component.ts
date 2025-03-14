import { Component, EventEmitter, Inject, Input, OnInit, Output, PLATFORM_ID } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import {
  NavBarItem,
  anyItemSubrouteActive,
  isSubrouteItem,
  shouldItemBeActive,
} from 'src/app/modules/shared/models/navbar-items.model';
import { User } from 'src/app/modules/shared/models/user.model';
import { ACCORDION_ANIMATION } from '../../../constants/animations';
import { Router } from '@angular/router';
import { LinkWhatsappService } from '../../../services/link-whatsapp/link-whatsapp.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-mobile-links',
  templateUrl: './mobile-links.component.html',
  styleUrls: ['./mobile-links.component.scss'],
})
export class MobileLinksComponent implements OnInit {
  @Input() menuItems!: NavBarItem[];
  @Input() userItems!: NavBarItem[];

  @Input() user!: User | null;

  @Input() activeRoute!: string;
  @Input() isOdontologia!: boolean;
  @Input() isConnectSaude!: boolean;

  // HACK: Primeng/Angular bug workaround
  @Input() accordionFix = false;
  @Input() accordionAnimation = ACCORDION_ANIMATION;

  @Output() linkSelected = new EventEmitter<void>();
  @Output() sair = new EventEmitter<void>();

  public isSubrouteItem = isSubrouteItem;
  public anyItemSubrouteActive = anyItemSubrouteActive;
  public shouldItemBeActive = shouldItemBeActive;

  protected isBrowser = false;
  
  constructor(
    protected authService: AuthService,
    private router: Router,
    private whatsappService: LinkWhatsappService,
    @Inject(PLATFORM_ID) private plataformId: string,
  ) { }

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.plataformId);
  }
  
  navigateToCadastrar() {
    this.router.navigate(['usuarios', 'pre-cadastro']);
  }

  navigateToConnectSaude() {
    this.linkSelected.emit();
    this.router.navigate(['planos-connect-saude']);
  }

  getWhatsappLink() {
    const mensagem = 'Olá, gostaria de mais informações sobre a assinatura do connect saúde.';
    const numero = '5527997513968';
    return this.whatsappService.gerarLink(mensagem, numero);
  }
}
