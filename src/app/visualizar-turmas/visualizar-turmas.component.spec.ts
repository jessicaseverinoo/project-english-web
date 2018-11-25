import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarTurmasComponent } from './visualizar-turmas.component';

describe('VisualizarTurmasComponent', () => {
  let component: VisualizarTurmasComponent;
  let fixture: ComponentFixture<VisualizarTurmasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarTurmasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarTurmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
