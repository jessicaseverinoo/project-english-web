import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtribuirExerciciosTurmasComponent } from './atribuir-exercicios-turmas.component';

describe('AtribuirExerciciosTurmasComponent', () => {
  let component: AtribuirExerciciosTurmasComponent;
  let fixture: ComponentFixture<AtribuirExerciciosTurmasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtribuirExerciciosTurmasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtribuirExerciciosTurmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
