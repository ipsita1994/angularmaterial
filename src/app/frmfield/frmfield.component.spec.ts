import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmfieldComponent } from './frmfield.component';

describe('FrmfieldComponent', () => {
  let component: FrmfieldComponent;
  let fixture: ComponentFixture<FrmfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrmfieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
