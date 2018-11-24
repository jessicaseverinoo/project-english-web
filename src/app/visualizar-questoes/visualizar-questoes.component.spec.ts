import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarQuestoesComponent } from './visualizar-questoes.component';

describe('VisualizarQuestoesComponent', () => {
  let component: VisualizarQuestoesComponent;
  let fixture: ComponentFixture<VisualizarQuestoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarQuestoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarQuestoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
