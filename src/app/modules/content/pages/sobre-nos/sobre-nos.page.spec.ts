import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreNosPage } from './sobre-nos.page';
import { PropositoComponent } from './components/proposito/proposito.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SobreNosPage', () => {
  let component: SobreNosPage;
  let fixture: ComponentFixture<SobreNosPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, HttpClientTestingModule],
      declarations: [SobreNosPage, PropositoComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(SobreNosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
