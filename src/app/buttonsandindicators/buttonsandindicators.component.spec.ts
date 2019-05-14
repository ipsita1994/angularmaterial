import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsandindicatorsComponent } from './buttonsandindicators.component';

describe('ButtonsandindicatorsComponent', () => {
  let component: ButtonsandindicatorsComponent;
  let fixture: ComponentFixture<ButtonsandindicatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsandindicatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsandindicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
