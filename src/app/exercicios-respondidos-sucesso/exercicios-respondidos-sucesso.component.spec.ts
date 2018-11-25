import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciciosRespondidosSucessoComponent } from './exercicios-respondidos-sucesso.component';

describe('ExerciciosRespondidosSucessoComponent', () => {
  let component: ExerciciosRespondidosSucessoComponent;
  let fixture: ComponentFixture<ExerciciosRespondidosSucessoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciciosRespondidosSucessoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciciosRespondidosSucessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
