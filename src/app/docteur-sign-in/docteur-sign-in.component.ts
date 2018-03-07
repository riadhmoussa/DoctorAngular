import { Component, OnInit } from '@angular/core';
import { ServiceMedecinService } from '../ServiceMedecin/service-medecin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-docteur-sign-in',
  templateUrl: './docteur-sign-in.component.html',
  styleUrls: ['./docteur-sign-in.component.css']
})
export class DocteurSignInComponent implements OnInit {

  constructor(private registerServiceMed:ServiceMedecinService,private router:Router) { }

  ngOnInit() {
  }
  loginmedecin(logMed){
    let med={loginEmail:'',loginPassword:''};
    med.loginEmail=logMed.email;
    med.loginPassword = logMed.password;
    this.registerServiceMed.loginMed(med).subscribe(
      result=>{
        if(result.json().msg=="AuthMedFailed"){
          console.log('Failed Login Medecin');
        }else{
          localStorage.setItem('tokenMed',result.json().tokenMed);
          this.router.navigate(['ListePatientMedecin']);
        }
      }
    );
    
  }

}
