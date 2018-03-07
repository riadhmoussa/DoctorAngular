import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilMedComponent } from './profil-med.component';

describe('ProfilMedComponent', () => {
  let component: ProfilMedComponent;
  let fixture: ComponentFixture<ProfilMedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilMedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
