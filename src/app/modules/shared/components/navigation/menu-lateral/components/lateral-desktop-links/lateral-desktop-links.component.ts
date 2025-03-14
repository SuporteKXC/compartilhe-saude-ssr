import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {
  NavBarItem,
  SubRouteItem,
  anyItemSubrouteActive,
  isSubrouteItem,
  shouldItemBeActive,
} from 'src/app/modules/shared/models/navbar-items.model';

@Component({
  selector: 'app-lateral-desktop-links',
  templateUrl: './lateral-desktop-links.component.html',
  styleUrls: ['./lateral-desktop-links.component.scss'],
})
export class LateralDesktopLinksComponent implements OnInit {
  @Input() menuItems!: NavBarItem[];
  @Input() activeRoute!: string;

  public menuPerfilCollapsed = true;

  public isSubrouteItem = isSubrouteItem;
  public anyItemSubrouteActive = anyItemSubrouteActive;
  public shouldItemBeActive = shouldItemBeActive;

  ngOnInit(): void {
    this.menuItems.forEach((item) => {
      if (this.isSubrouteItem(item)) {
        item.menuModel = this.getMenuModelFromSubRouteItem(item);
      }
    });

    const itemPerfil: SubRouteItem | undefined = this.menuItems.find(
      (item) => item.label === 'Meu perfil'
    ) as SubRouteItem;
    if (this.isSubrouteItem(itemPerfil) && anyItemSubrouteActive(itemPerfil, this.activeRoute))
      this.menuPerfilCollapsed = false;
  }

  public getMenuModelFromSubRouteItem(item: SubRouteItem): MenuItem[] {
    return item.subRoutes.map((activeRoute) => ({
      label: activeRoute.label,
      routerLink: activeRoute.path,
    }));
  }
}
