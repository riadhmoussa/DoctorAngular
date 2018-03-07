import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers , RequestOptions , Response } from '@angular/http';
import 'rxjs';
import { Observable } from 'rxjs';
@Injectable()
export class ServiceMedecinService {

  headers : Headers;
  options: RequestOptions
  constructor(private http:Http) { }
  public RegisterMedecin(UserMed){
    return this.http.post('http://localhost:3000/medecin/signup', UserMed,this.options);
  }
  public loginMed(UserMed){
    return this.http.post('http://localhost:3000/medecin/signin', UserMed , this.options);
  }
  public getCurrentMedecin(tok){
    return this.http.get('http://localhost:3000/medecin/UserMed/'+tok,{});
  }
  public LoadPatient(tok){
    return this.http.get('http://localhost:3000/medecin/ListePatien/'+tok,{})
  }
  public AddPatient(UserPatient){
    return this.http.post('http://localhost:3000/medecin/AddPatient',UserPatient,this.options);
  }

  public VisitPatient(PatID){
    return this.http.get('http://localhost:3000/medecin/VisitPatient/'+PatID,{});
  }
  public AddComment(Com){
    return this.http.post('http://localhost:3000/medecin/AddCommentPat',Com,this.options)
  }
  public GetReglement(idPat){
    return this.http.get('http://localhost:3000/medecin/GetReglement/'+idPat,{});

  }
  public AddReglement(Montant){
    return this.http.post('http://localhost:3000/medecin/AddReglement',Montant,this.options);
  }
  public AddImageMedicale(ImageMedicale){
    return this.http.post('http://localhost:3000/medecin/AddImageMedicale',ImageMedicale,this.options);

  }
  public GetImageMedicale(idPat){
    return this.http.get('http://localhost:3000/medecin/GetImageMedicale/'+idPat,{});
  }
  public AddRDV(RDV){
    return this.http.post('http://localhost:3000/medecin/AddRDV',RDV,this.options);
  }
  public GetRDVPatient(idPat){
    return this.http.get('http://localhost:3000/medecin/GetPatientRDV/'+idPat,{});
  }
  public GetCommentPat(idPat){
return this.http.get('http://localhost:3000/medecin/GetCommentsPat/'+idPat,{});
  }
  public GetRDVMedecin(idMed){
    return this.http.get('http://localhost:3000/medecin/AllRDV/'+idMed,{});
  }
  public AddArticle(Art){
    return this.http.post('http://localhost:3000/medecin/AddArticle',Art,this.options);
  }
  public getArticle(idMed){
return this.http.get('http://localhost:3000/medecin/GetArticle/'+idMed,{});
  }
  AddCertificat(Certificat){
    return this.http.post('http://localhost:3000/medecin/ADDCertificat',Certificat,this.options);
  }
  GetCertificat(IDPat){
    return this.http.get('http://localhost:3000/medecin/GetCertificat/'+IDPat,{});
  }
  GetSpecilite(){
    return this.http.get('http://localhost:3000/medecin/GetSpecialte',{});
  }
  GETCabinetMedecin(idMed){
    return this.http.get('http://localhost:3000/medecin/GetMedecinCbinet/'+idMed,{});
  }
  AjouterCabinet(Cabinet){
    return this.http.post('http://localhost:3000/medecin/AjouterCabinet',Cabinet,this.options);
  }
  MiseAJourCabinet(Cabinet,idMed){
    return this.http.patch('http://localhost:3000/medecin/MisAJour/'+idMed,Cabinet,this.options);
  }
  ChangeMotDePasse(MedMDP,idMed){
return this.http.patch('http://localhost:3000/medecin/ChangeMotDePasse/'+idMed,MedMDP,this.options);
  }
  AjouterSpecialiteMedecin(Specialite){
    return this.http.post('http://localhost:3000/medecin/AjouterSpecialite',Specialite,this.options);
  }
  GetMedecinSpecialite(idMed){
  return this.http.get('http://localhost:3000/medecin/AfficherMedecinSpecialite/'+idMed,{});
}
}
