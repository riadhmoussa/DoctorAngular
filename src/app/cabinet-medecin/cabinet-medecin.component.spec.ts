import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetMedecinComponent } from './cabinet-medecin.component';

describe('CabinetMedecinComponent', () => {
  let component: CabinetMedecinComponent;
  let fixture: ComponentFixture<CabinetMedecinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabinetMedecinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinetMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
