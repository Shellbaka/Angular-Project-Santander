import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaCriacaoComponent } from './tabela-criacao.component';

describe('TabelaCriacaoComponent', () => {
  let component: TabelaCriacaoComponent;
  let fixture: ComponentFixture<TabelaCriacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelaCriacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaCriacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
