import { Component, OnInit } from '@angular/core';
import { ServiceMedecinService } from '../ServiceMedecin/service-medecin.service';

@Component({
  selector: 'app-profil-med',
  templateUrl: './profil-med.component.html',
  styleUrls: ['./profil-med.component.css']
})
export class ProfilMedComponent implements OnInit {

  constructor(private registerServiceMed:ServiceMedecinService) { }
  idMedecin:any;
  Nom:any;
  Prenom:any;
  ImagePath:any;
  Articles=[]
  ngOnInit() {
    const s = localStorage.getItem('tokenMed');
    this.registerServiceMed.getCurrentMedecin(s).subscribe(
      result=>{
        this.idMedecin=result.json().info.idMedecin;
        this.Nom=result.json().info.NomMedecin;
        this.Prenom=result.json().info.PrenomMedecin;
        this.ImagePath=result.json().info.ImagePathMedecin;
this.registerServiceMed.getArticle(result.json().info.idMedecin).subscribe(result=>{
  this.Articles = result.json().info;
});
                
      }
    );
  }
  addArticle(f){

    let Article={ContenuArticle:'',idMedecin:0}
    Article.ContenuArticle = f.ContenuArticle;
    Article.idMedecin = this.idMedecin;
    console.log(Article);
    this.registerServiceMed.AddArticle(Article).subscribe(result=>{
console.log(result)
    });
    this.Articles.unshift({ContenuArticle:f.ContenuArticle,DateCommentaire:new Date()});
  }

}
