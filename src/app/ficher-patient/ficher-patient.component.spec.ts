import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicherPatientComponent } from './ficher-patient.component';

describe('FicherPatientComponent', () => {
  let component: FicherPatientComponent;
  let fixture: ComponentFixture<FicherPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicherPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicherPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
