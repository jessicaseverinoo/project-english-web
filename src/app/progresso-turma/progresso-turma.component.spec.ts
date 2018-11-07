import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressoTurmaComponent } from './progresso-turma.component';

describe('ProgressoTurmaComponent', () => {
  let component: ProgressoTurmaComponent;
  let fixture: ComponentFixture<ProgressoTurmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressoTurmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressoTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
