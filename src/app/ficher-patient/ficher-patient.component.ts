import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceMedecinService } from '../ServiceMedecin/service-medecin.service';
import * as jsPDF from 'jspdf'

import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
@Component({
  selector: 'app-ficher-patient',
  templateUrl: './ficher-patient.component.html',
  styleUrls: ['./ficher-patient.component.css']
})
export class FicherPatientComponent implements OnInit {
  malist = {idMedecin:0,idPatient:0,DateNaisPatient:'',CINPatient:0,NomPatient:'',PrenomPatient:'',Sexe:'',AdressePatient:'',VillePatient:'',CodePostalPatient:0,NumTelPatient:0,EmailPatient:'',ImagePathPatient:''};
  id:any;
  idPat:any;
  comments=[
  ]
  reglement=[]
  ImageMedicale=[]
  ref: AngularFireStorageReference;
task: AngularFireUploadTask;
uploadProgress: Observable<number>;
downloadURL: Observable<string>;
uploadState: Observable<string>;
urlImage:any;
idMedecin:any;
TabRDV=[];
NomMedecin:string;
PrenomMedecin:string;
Certificat=[]
  constructor(private afStorage: AngularFireStorage,private router:Router,private activatedRoute : ActivatedRoute,private registerServiceMed:ServiceMedecinService) { }

  ngOnInit() {
   
this.id = this.activatedRoute.snapshot.params['id'];
this.registerServiceMed.VisitPatient(this.id).subscribe(result=>{
  this.malist.idPatient = result.json().info.idPatient;
  this.malist.NomPatient = result.json().info.NomPatient;
  this.malist.PrenomPatient = result.json().info.PrenomPatient;
  this.malist.Sexe = result.json().info.Sexe;
  this.malist.DateNaisPatient = result.json().info.DateNaisPatient;
  this.malist.ImagePathPatient = result.json().info.ImagePathPatient;
  this.malist.CINPatient = result.json().info.CINPatient;
  this.malist.NumTelPatient = result.json().info.NumTelPatient;
  this.malist.EmailPatient = result.json().info.EmailPatient;
  this.malist.VillePatient = result.json().info.VillePatient;
  this.malist.CodePostalPatient = result.json().info.CodePostalPatient;
  this.malist.AdressePatient = result.json().info.AdressePatient;
});

this.registerServiceMed.GetReglement(this.id).subscribe(result=>
  this.reglement = result.json().info
);

this.registerServiceMed.GetImageMedicale(this.id).subscribe(result=>{
this.ImageMedicale = result.json().info;
console.log(this.ImageMedicale)
});


const s = localStorage.getItem('tokenMed');
    this.registerServiceMed.getCurrentMedecin(s).subscribe(
      result=>{
        this.idMedecin = result.json().info.idMedecin;
this.NomMedecin = result.json().info.NomMedecin;
this.PrenomMedecin = result.json().info.PrenomMedecin;
      }
    );

this.registerServiceMed.GetRDVPatient(this.id).subscribe(result=>{
  this.TabRDV = result.json().info;
});

this.registerServiceMed.GetCommentPat(this.id).subscribe(result=>{
  this.comments = result.json().info
});

this.registerServiceMed.GetCertificat(this.id).subscribe(result=>{
this.Certificat = result.json().info;
console.log(this.Certificat)
});
  }

  addComment(c){
    console.log(c);
    var da=new Date().toLocaleString();
    this.id = this.activatedRoute.snapshot.params['id'];
    let comm={ContenuCommentaire:'',idPatient:0};
    comm.ContenuCommentaire = c.com;
    comm.idPatient = this.id;
    this.registerServiceMed.AddComment(comm).subscribe(
      result=>console.log(result)
    );
    this.comments.unshift(
     
      {ContenuCommentaire:c.com,DateCommentaire:da}
    );
  }

  mont(m){
    let mon={Montant:0.0,idPatient:0}
    mon.Montant= m.montantpatient;
    mon.idPatient = this.id;
    this.registerServiceMed.AddReglement(mon).subscribe(result=>{
      
    });
    this.reglement.unshift({Montant:mon.Montant,DateRgelement:new Date()});
  }

  DowCertificat(cert){
    let Certificat = {idPatient:0,DateDebut:'',Duree:0}
    Certificat.idPatient = this.malist.idPatient;
    Certificat.DateDebut = cert.DateDebut;
    Certificat.Duree = cert.Duree;
    this.registerServiceMed.AddCertificat(Certificat).subscribe(result=>{
console.log(result)
    });
    const doc = new jsPDF();
    doc.text(20,30,'Le soussigné , docteur '+this.NomMedecin+' '+this.PrenomMedecin);
    doc.text(20,40,'Cértifier avoir examiné ce jour le(la) patient(e) : '+this.malist.NomPatient+' '+this.malist.PrenomPatient);
    doc.text(20,50,'et que son étar de santé nécessite un repos de '+cert.Duree+'jour(s)');
    doc.text(20,60,'a partir du '+cert.DateDebut +'sauf complications(s)');
    doc.text(20,100,'Fait a '+this.malist.VillePatient+'Lé '+new Date());
    //doc.text(''+this.NomMedecin+' '+this.PrenomMedecin+'Cértifier avoir examiné ce jour le(la) patient(e) : '+this.malist.NomPatient+' '+this.malist.PrenomPatient+'et que son étar de santé nécessite un repos de '+cert.Duree+'jour(s),a partir du '+cert.DateDebut +'sauf complications(s).Fait a '+this.malist.VillePatient+'Lé '+new Date(),35,25);
    doc.save('Certificat.pdf');
    this.Certificat.unshift({DateDebut:cert.DateDebut,Duree:cert.Duree});
  }
  Ord(){
    var doc = new jsPDF();
doc.text(20, 20, 'Hello world!');
doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');

doc.text(20, 40, 'Do you like that?');
doc.save('Ordonnance.pdf')
  }

  upload(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
    this.uploadProgress = this.task.percentageChanges();
    this.downloadURL = this.task.downloadURL();
    this.urlImage="https://firebasestorage.googleapis.com/v0/b/mondoctor-e0a88.appspot.com/o/"+id+"?alt=media&token=054bee76-9ff9-4aac-ac50-7fdeac3cd806";
 console.log(this.urlImage)
  }
  InsertImageMedicale(i){
    let ImgMedicale={cheminImage:'',idPatient:0}
    ImgMedicale.idPatient = this.id;
    ImgMedicale.cheminImage = this.urlImage;
    this.registerServiceMed.AddImageMedicale(ImgMedicale).subscribe(result=>{
      console.log(result)
    });
    this.ImageMedicale.unshift({cheminImage:ImgMedicale.cheminImage,DateRgelement:new Date()});
  }
  AddRDV(da){
    console.log(da.daterdv)
    console.log(da.heurerdv)
    let RDV={idPatient:0,idMedecin:0,HeureRDV:'',DateRDV:''};
    RDV.idMedecin = this.idMedecin;
    RDV.idPatient = this.malist.idPatient;
    RDV.DateRDV = da.daterdv;
    RDV.HeureRDV = da.heurerdv;
    console.log(RDV.idMedecin)
    console.log(RDV.idPatient)
    this.registerServiceMed.AddRDV(RDV).subscribe(result=>{
      console.log(result)
    });
    this.TabRDV.unshift({DateRDV:da.daterdv,HeureRDV:da.heurerdv});

  }
}
