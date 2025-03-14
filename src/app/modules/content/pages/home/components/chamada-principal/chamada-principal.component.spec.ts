import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadaPrincipalComponent } from './chamada-principal.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ChamadaPrincipalComponent', () => {
  let component: ChamadaPrincipalComponent;
  let fixture: ComponentFixture<ChamadaPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      declarations: [ChamadaPrincipalComponent],
    });
    fixture = TestBed.createComponent(ChamadaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
