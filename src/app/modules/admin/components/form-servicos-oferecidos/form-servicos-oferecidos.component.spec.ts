import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormServicosOferecidosComponent } from './form-servicos-oferecidos.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MessageService } from 'primeng/api';

describe('FormServicosOferecidosComponent', () => {
  let component: FormServicosOferecidosComponent;
  let fixture: ComponentFixture<FormServicosOferecidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService],
      imports: [HttpClientTestingModule],
      declarations: [FormServicosOferecidosComponent]
    });
    fixture = TestBed.createComponent(FormServicosOferecidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
