import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolverQuestoesComponent } from './resolver-questoes.component';

describe('ResolverQuestoesComponent', () => {
  let component: ResolverQuestoesComponent;
  let fixture: ComponentFixture<ResolverQuestoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResolverQuestoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolverQuestoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
