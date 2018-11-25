import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilTurmaComponent } from './perfil-turma.component';

describe('PerfilTurmaComponent', () => {
  let component: PerfilTurmaComponent;
  let fixture: ComponentFixture<PerfilTurmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilTurmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
