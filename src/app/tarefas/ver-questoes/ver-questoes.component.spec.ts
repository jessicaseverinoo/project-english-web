import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerQuestoesComponent } from './ver-questoes.component';

describe('VerQuestoesComponent', () => {
  let component: VerQuestoesComponent;
  let fixture: ComponentFixture<VerQuestoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerQuestoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerQuestoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
