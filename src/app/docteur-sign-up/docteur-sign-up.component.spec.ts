import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocteurSignUpComponent } from './docteur-sign-up.component';

describe('DocteurSignUpComponent', () => {
  let component: DocteurSignUpComponent;
  let fixture: ComponentFixture<DocteurSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocteurSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocteurSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
