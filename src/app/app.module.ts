import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DocteurSignUpComponent } from './docteur-sign-up/docteur-sign-up.component';
import { DocteurSignInComponent } from './docteur-sign-in/docteur-sign-in.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardDocteurComponent } from './dashboard-docteur/dashboard-docteur.component';
import { ServiceMedecinService } from './ServiceMedecin/service-medecin.service';
import { HttpModule } from '@angular/http';
import { ListePatientMedecinComponent } from './liste-patient-medecin/liste-patient-medecin.component';
import { FicherPatientComponent } from './ficher-patient/ficher-patient.component';
import { MenuMedecinComponent } from './menu-medecin/menu-medecin.component';
import { ProfilMedecinComponent } from './profil-medecin/profil-medecin.component';
import { ReglementStaticMedecinComponent } from './reglement-static-medecin/reglement-static-medecin.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { RdvmedecinComponent } from './rdvmedecin/rdvmedecin.component';
import { SearchPatientPipe } from './search-patient.pipe';
import { ProfilMedComponent } from './profil-med/profil-med.component';
import { CabinetMedecinComponent } from './cabinet-medecin/cabinet-medecin.component';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    AppComponent,
    DocteurSignUpComponent,
    DocteurSignInComponent,
    DashboardDocteurComponent,
    ListePatientMedecinComponent,
    FicherPatientComponent,
    MenuMedecinComponent,
    ProfilMedecinComponent,
    ReglementStaticMedecinComponent,
    RdvmedecinComponent,
    SearchPatientPipe,
    ProfilMedComponent,
    CabinetMedecinComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCOdIsQdURan0ssaBPrxbjMCECLzNuCVmA",
      authDomain: "mondoctor-e0a88.firebaseapp.com",
      projectId: "mondoctor-e0a88",
      storageBucket: "mondoctor-e0a88.appspot.com"
    }),
    AngularFireStorageModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAgqQ_HUtNPdt6s3TBieVtF8jKqDu-jLDM'
    })
  ],
  providers: [ServiceMedecinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
