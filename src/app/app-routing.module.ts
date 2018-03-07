import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DocteurSignInComponent } from './docteur-sign-in/docteur-sign-in.component';
import { DocteurSignUpComponent } from './docteur-sign-up/docteur-sign-up.component';
import { DashboardDocteurComponent } from './dashboard-docteur/dashboard-docteur.component';
import { ListePatientMedecinComponent } from './liste-patient-medecin/liste-patient-medecin.component';
import { FicherPatientComponent } from './ficher-patient/ficher-patient.component';
import { ProfilMedecinComponent } from './profil-medecin/profil-medecin.component';
import { RdvmedecinComponent } from './rdvmedecin/rdvmedecin.component';
import { ReglementStaticMedecinComponent } from './reglement-static-medecin/reglement-static-medecin.component';
import { ProfilMedComponent } from './profil-med/profil-med.component';
import { CabinetMedecinComponent } from './cabinet-medecin/cabinet-medecin.component';

const routes: Routes = [
  { path: '', redirectTo: '/DocteurSignUp', pathMatch: 'full' },
  { path: 'DocteurSignIn', component: DocteurSignInComponent },
  { path: 'DocteurSignUp', component: DocteurSignUpComponent },
  { path:'ListePatientMedecin',component:ListePatientMedecinComponent},
  { path:'FichePatient/:id' , component:FicherPatientComponent},
  { path:'ProfilMedecin',component:ProfilMedecinComponent},
  { path:'ListeRDV',component:RdvmedecinComponent},
  { path:'ReglementStaticMedecinComponent',component:ReglementStaticMedecinComponent},
  { path:'ProfilMed',component:ProfilMedComponent},
  { path:'CabinetMedecin',component:CabinetMedecinComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
