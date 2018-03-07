import { Component, OnInit } from '@angular/core';
import { ServiceMedecinService } from '../ServiceMedecin/service-medecin.service';

@Component({
  selector: 'app-rdvmedecin',
  templateUrl: './rdvmedecin.component.html',
  styleUrls: ['./rdvmedecin.component.css']
})
export class RdvmedecinComponent implements OnInit {
  idMedecin:any;
  ListeRDV=[]
  constructor(private registerServiceMed:ServiceMedecinService) { }
 
  ngOnInit() {
    const s = localStorage.getItem('tokenMed');
    this.registerServiceMed.getCurrentMedecin(s).subscribe(
      result=>{
        this.registerServiceMed.GetRDVMedecin(result.json().info.idMedecin).subscribe(result=>{
          this.ListeRDV = result.json().info;
          console.log(this.ListeRDV)
        });
      }
    );
    
  }

}
