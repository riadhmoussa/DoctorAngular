import { Component, OnInit } from '@angular/core';
import { ServiceMedecinService } from '../ServiceMedecin/service-medecin.service';
import { Router } from '@angular/router';

import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-docteur-sign-up',
  templateUrl: './docteur-sign-up.component.html',
  styleUrls: ['./docteur-sign-up.component.css']
})
export class DocteurSignUpComponent implements OnInit {
private errorMessage :String =  '';
ref: AngularFireStorageReference;
task: AngularFireUploadTask;
uploadProgress: Observable<number>;
downloadURL: Observable<string>;
uploadState: Observable<string>;
urlImage:any;
  constructor(private registerServiceMed:ServiceMedecinService,private router:Router,private afStorage: AngularFireStorage) { }

  ngOnInit() {
  }


  addmedecin(medecin){
    let med = {Email:'',MotDePasse:'',NomMedecin:'',PrenomMedecin:'',CINMedecin:0,MatMedecin:0,Sexe:'',DateNaissMedecin:'',AdresseMedecin:'',VilleMedecin:'',CodePostalMedecin:0,NumTelPortableMedecin:0,NumTelFixMedecin:0,ImagePathMedecin:''}
    med.Email = medecin.Email;
    med.MotDePasse = medecin.MotDePasse;
    med.NomMedecin = medecin.NomMedecin;
    med.PrenomMedecin = medecin.PrenomMedecin;
    med.CINMedecin = medecin.CINMedecin;
    med.MatMedecin = medecin.MatMedecin;
    med.Sexe = medecin.Sexe;
    med.DateNaissMedecin = medecin.DateNaissMedecin;
    med.AdresseMedecin = medecin.AdresseMedecin;
    med.VilleMedecin = medecin.VilleMedecin;
    med.CodePostalMedecin = medecin.CodePostalMedecin;
    med.NumTelPortableMedecin = medecin.NumTelPortableMedecin;
    med.NumTelFixMedecin = medecin.NumTelFixMedecin;
    med.ImagePathMedecin = this.urlImage;
    this.registerServiceMed.RegisterMedecin(med)
    .subscribe(
      result => 
      this.router.navigate(['DocteurSignIn']),
      error => this.errorMessage = <any>error
      
    );
  }
  upload(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
    this.uploadProgress = this.task.percentageChanges();
    this.downloadURL = this.task.downloadURL();
    this.urlImage="https://firebasestorage.googleapis.com/v0/b/mondoctor-e0a88.appspot.com/o/"+id+"?alt=media&token=054bee76-9ff9-4aac-ac50-7fdeac3cd806";
  }

}
