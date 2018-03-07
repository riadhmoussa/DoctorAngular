import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDocteurComponent } from './dashboard-docteur.component';

describe('DashboardDocteurComponent', () => {
  let component: DashboardDocteurComponent;
  let fixture: ComponentFixture<DashboardDocteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDocteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDocteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
