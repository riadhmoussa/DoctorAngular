import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocteurSignInComponent } from './docteur-sign-in.component';

describe('DocteurSignInComponent', () => {
  let component: DocteurSignInComponent;
  let fixture: ComponentFixture<DocteurSignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocteurSignInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocteurSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
