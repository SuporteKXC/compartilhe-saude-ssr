import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { BoasVindasPage } from './boas-vindas.page';

describe('BoasVindasPage', () => {
  let component: BoasVindasPage;
  let fixture: ComponentFixture<BoasVindasPage>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoasVindasPage],
      imports: [RouterTestingModule],
    });

    fixture = TestBed.createComponent(BoasVindasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve renderizar uma imagem com texto descritivo', () => {
    const dataTest = 'Mulher branca, jovem, de cabelos longos e escuros';

    const testContent = fixture.debugElement.query(By.css('[data-testid="image"]'));
    const element = testContent.nativeElement as HTMLElement;

    expect(element.getAttribute('alt')).toContain(dataTest);
  });

  it('Deve renderizar uma mensagem indicando que seu cadastro está concluído', () => {
    const dataTest = 'Que bom ter você conosco!';

    const testContent = fixture.debugElement.query(By.css('[data-testid="title"]'));
    const element = testContent.nativeElement as HTMLElement;

    expect(element.innerHTML).toContain(dataTest);
  });

  it('Deve retornar a página inicial ao efetuar a ação de click no elemento ancora', fakeAsync(() => {
    const anchor = fixture.debugElement.query(By.css('[data-testid="anchor"]'));

    anchor.nativeElement.click();
    tick();

    expect(router.url).toBe('/');
  }));
});
