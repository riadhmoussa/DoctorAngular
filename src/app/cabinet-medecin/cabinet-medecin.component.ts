import { Component, OnInit } from '@angular/core';
import { ServiceMedecinService } from '../ServiceMedecin/service-medecin.service';

@Component({
  selector: 'app-cabinet-medecin',
  templateUrl: './cabinet-medecin.component.html',
  styleUrls: ['./cabinet-medecin.component.css']
})
export class CabinetMedecinComponent implements OnInit {
  lat: number ;
  lng: number ;
  zoom : number = 1;
  idMedecin:any;
  Cabinet:boolean;
  Cab:any;
  constructor(private registerServiceMed:ServiceMedecinService) { }

  ngOnInit() {
    const s = localStorage.getItem('tokenMed');
    this.registerServiceMed.getCurrentMedecin(s).subscribe(
      result=>{
        this.idMedecin = result.json().info.idMedecin;
        this.registerServiceMed.GETCabinetMedecin(result.json().info.idMedecin).subscribe(
          result=>{
            
            if(result.json().info.length==0){
              this.Cabinet=false;
              this.lat = 51.678418;
              this.lng = 7.809007;
            }else{
              this.Cabinet = true;
              this.lat = result.json().info[0].Lat;
              this.lng = result.json().info[0].Log;
              this.Cab = result.json().info[0]
            }
          }
        );
      }
    );
  }
  malClicked(event){
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;

  }
  AjouterCabinet(f){
    let Cabinet={Description:'',Lat:0,Log:0,idMedecin:this.idMedecin}
    Cabinet.Description = f.description;
    Cabinet.Lat = this.lat;
    Cabinet.Log = this.lng;
    if(this.Cabinet){
      this.registerServiceMed.MiseAJourCabinet(Cabinet,this.idMedecin).subscribe(result=>{
console.log(result)
      });
    }else{
      this.registerServiceMed.AjouterCabinet(Cabinet).subscribe(result=>{
      });
    }
  }
}
