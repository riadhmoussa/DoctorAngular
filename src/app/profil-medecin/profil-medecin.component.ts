import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceMedecinService } from '../ServiceMedecin/service-medecin.service';

@Component({
  selector: 'app-profil-medecin',
  templateUrl: './profil-medecin.component.html',
  styleUrls: ['./profil-medecin.component.css']
})
export class ProfilMedecinComponent implements OnInit {
  res:any;
  ImagePath:any;
  Nom:any;
  Prenom:any;
  Specialites=[]
  MedecinSpecialite=[]
  idMedecin:any;
  constructor(private router:Router,private registerServiceMed:ServiceMedecinService) { }

  ngOnInit() {
    const s = localStorage.getItem('tokenMed');
    this.registerServiceMed.getCurrentMedecin(s).subscribe(
      result=>{
  this.idMedecin = result.json().info.idMedecin,
  this.registerServiceMed.GetMedecinSpecialite(result.json().info.idMedecin).subscribe(result=>{
    this.MedecinSpecialite = result.json().info

  });
      }
    );
    this.registerServiceMed.GetSpecilite().subscribe(result=>{
      this.Specialites = result.json().info
    });
    
  }

  ChangeMotDePasse(f){
    let MedMDP={NewMotDePasse:'',LastMotDePasse:''}
    MedMDP.LastMotDePasse = f.LastMotDePasse ;
    MedMDP.NewMotDePasse = f.NewMotDePasse ;
    this.registerServiceMed.ChangeMotDePasse(MedMDP,this.idMedecin).subscribe(result=>{
    });
  }
  AjouterSpecialite(f){
    let Spec={idSpecialite:f.Specialite,idMedecin:this.idMedecin}
    this.registerServiceMed.AjouterSpecialiteMedecin(Spec).subscribe(result=>{
     console.log(result);
    });
    this.MedecinSpecialite.unshift({LibelleSpecialite:this.Specialites[f.Specialite].LibelleSpecialite});
    
  }

}
