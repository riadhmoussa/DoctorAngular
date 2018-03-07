import { Component, OnInit } from '@angular/core';
import { ServiceMedecinService } from '../ServiceMedecin/service-medecin.service';
import { SearchPatientPipe } from '../search-patient.pipe';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-liste-patient-medecin',
  templateUrl: './liste-patient-medecin.component.html',
  styleUrls: ['./liste-patient-medecin.component.css']
})
export class ListePatientMedecinComponent implements OnInit {

  malist=[]
  idPat:any;
  constructor(private registerServiceMed:ServiceMedecinService) { }

  ngOnInit() {
    this.loadPat();
  }

  addmedecin(patient){
    const s = localStorage.getItem('tokenMed');
    let pa= {idMedecin:'',CINPatient:0,NomPatient:'',PrenomPatient:'',Sexe:'',AdressePatient:'',VillePatient:'',CodePostalPatient:0,NumTelPatient:0,EmailPatient:''};
    pa.idMedecin = s;
    pa.CINPatient = patient.CINPatient;
    pa.NomPatient = patient.NomPatient;
    pa.PrenomPatient = patient.PrenomPatient;
    pa.Sexe = patient.Sexe;
    pa.AdressePatient = patient.AdressePatient;
    pa.VillePatient = patient.VillePatient;
    pa.CodePostalPatient = patient.CodePostalPatient;
    pa.NumTelPatient = patient.NumTelPatient;
    pa.EmailPatient = patient.EmailPatient;
    
    this.registerServiceMed.AddPatient(pa)
    .subscribe(
      result=>{
        this.malist.unshift(
          {idPatient:result.json().message,NomPatient:pa.NomPatient,PrenomPatient:pa.PrenomPatient,NumTelPatient:pa.NumTelPatient,ImagePathPatient:'https://firebasestorage.googleapis.com/v0/b/mondoctor-e0a88.appspot.com/o/physician_head_doctor.png?alt=media&token=02bb1025-17b9-4f54-bd4a-49d7a3abbeec'}
        )
        }
    );
    
  }

  loadPat(){
    const s = localStorage.getItem('tokenMed');
    this.registerServiceMed.LoadPatient(s).subscribe(data=>{
      this.malist = data.json().info;
      console.log(this.malist);
    });
  }
}
