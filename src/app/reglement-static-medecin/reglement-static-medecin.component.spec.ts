import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglementStaticMedecinComponent } from './reglement-static-medecin.component';

describe('ReglementStaticMedecinComponent', () => {
  let component: ReglementStaticMedecinComponent;
  let fixture: ComponentFixture<ReglementStaticMedecinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReglementStaticMedecinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReglementStaticMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
