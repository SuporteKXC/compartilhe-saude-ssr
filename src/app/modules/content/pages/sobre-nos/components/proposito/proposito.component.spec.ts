import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropositoComponent } from './proposito.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { Router } from '@angular/router';

describe('PropositoComponent', () => {
  let component: PropositoComponent;
  let fixture: ComponentFixture<PropositoComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [PropositoComponent],
      providers: [
        {
          provide: Router,
          useValue: {
            navigate: jest.fn(),
          },
        },
      ],
    });
    fixture = TestBed.createComponent(PropositoComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve navegar até a pagina de pre-cadastro quando a função for chamada', () => {
    const targetRoute = 'usuarios/pre-cadastro';

    component.navigateToPreCadastro();

    expect(router.navigate).toHaveBeenCalledWith([targetRoute]);
  });
});
