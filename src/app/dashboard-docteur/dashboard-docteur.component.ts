import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceMedecinService } from '../ServiceMedecin/service-medecin.service';

@Component({
  selector: 'app-dashboard-docteur',
  templateUrl: './dashboard-docteur.component.html',
  styleUrls: ['./dashboard-docteur.component.css']
})
export class DashboardDocteurComponent implements OnInit {

  res:any;
  ImagePath:any;
  Nom:any;
  Prenom:any;
  constructor(private router:Router,private registerServiceMed:ServiceMedecinService) { }

  ngOnInit() {
    const s = localStorage.getItem('tokenMed');
    this.registerServiceMed.getCurrentMedecin(s).subscribe(
      result=>{
        this.Nom=result.json().info.NomMedecin;
        this.Prenom=result.json().info.PrenomMedecin;
        this.ImagePath=result.json().info.ImagePathMedecin;
                
      }
    );
  }
  logout(){
    localStorage.removeItem('tokenMed');
    this.router.navigate(['/DocteurSignIn']);
  }

}
