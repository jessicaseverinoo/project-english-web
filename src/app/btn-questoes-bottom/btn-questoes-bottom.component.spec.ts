import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnQuestoesBottomComponent } from './btn-questoes-bottom.component';

describe('BtnQuestoesBottomComponent', () => {
  let component: BtnQuestoesBottomComponent;
  let fixture: ComponentFixture<BtnQuestoesBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnQuestoesBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnQuestoesBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
