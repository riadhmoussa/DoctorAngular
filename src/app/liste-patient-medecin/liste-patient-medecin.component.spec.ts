import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePatientMedecinComponent } from './liste-patient-medecin.component';

describe('ListePatientMedecinComponent', () => {
  let component: ListePatientMedecinComponent;
  let fixture: ComponentFixture<ListePatientMedecinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListePatientMedecinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePatientMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
