import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultoraComponent } from './consultora.component';
import { Router } from '@angular/router';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { By } from '@angular/platform-browser';

describe('ConsultoraComponent', () => {
  let component: ConsultoraComponent;
  let fixture: ComponentFixture<ConsultoraComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ConsultoraComponent],
      providers: [
        {
          provide: Router,
          useValue: {
            navigate: jest.fn(),
          },
        },
      ],
    });
    fixture = TestBed.createComponent(ConsultoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('Deve criar componente', () => {
    expect(component).toBeTruthy();
  });

  it('Deve haver um título', () => {
    const testContent = fixture.debugElement.query(By.css('[data-testid="title-consultora"]'));
    const element = testContent.nativeElement as HTMLElement;
    expect(element.innerHTML).toBeTruthy();
  });

  it('Deve haver texto alternativo para imagem', () => {
    const testContent = fixture.debugElement.query(By.css('[data-testid="img-consultora"]'));
    const element = testContent.nativeElement as HTMLElement;

    expect(element.getAttribute('alt')).toBeTruthy();
  });

  it('Deve navegar para a rota correta quando a função navigateTo for chamada', () => {
    const targetRoute = 'usuarios/pre-cadastro';

    component.navigateTo(targetRoute);

    expect(router.navigate).toHaveBeenCalledWith([targetRoute]);
  });
});
