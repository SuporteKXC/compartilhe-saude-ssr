import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaPerguntasComponent } from './tabela-perguntas.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import { DialogService } from 'primeng/dynamicdialog';

describe('TabelaPerguntasComponent', () => {
  let component: TabelaPerguntasComponent;
  let fixture: ComponentFixture<TabelaPerguntasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MessageService, DialogService],
      declarations: [TabelaPerguntasComponent]
    });
    fixture = TestBed.createComponent(TabelaPerguntasComponent);
    component = fixture.componentInstance;
    component.shouldSearchAgain$ = new Subject();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
