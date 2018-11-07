import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveisQuestoesComponent } from './niveis-questoes.component';

describe('NiveisQuestoesComponent', () => {
  let component: NiveisQuestoesComponent;
  let fixture: ComponentFixture<NiveisQuestoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiveisQuestoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiveisQuestoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
