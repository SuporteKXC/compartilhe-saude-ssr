import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoState } from 'src/app/modules/content/models/produto-state-model';
import { State } from 'src/app/modules/shared/services/navigation/models/state.type';
import { NavigationService } from 'src/app/modules/shared/services/navigation/navigation.service';

@Component({
  selector: 'app-detalhes-checkup',
  templateUrl: './detalhes-checkup.page.html',
  styleUrls: ['./detalhes-checkup.page.scss']
})
export class DetalhesCheckupPage {
  protected state!: State<ProdutoState>;

  constructor(
    private router: Router,
    private navigation: NavigationService
  ) {
    this.navigation.state$.subscribe((state: State<ProdutoState> | null) => {
      if (state) {
        this.state = state;
        navigation.clearState();
      }
    });
  }

  navigateToCheckups() {
    this.router.navigate(['checkups']);
  }
}
