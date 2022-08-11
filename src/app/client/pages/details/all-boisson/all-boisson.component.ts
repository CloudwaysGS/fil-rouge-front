import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/shared/models/produits';

@Component({
  selector: 'abs-all-boisson',
  templateUrl: './all-boisson.component.html',
  styleUrls: ['./all-boisson.component.css']
})
export class AllBoissonComponent implements OnInit {

produits : any | null = null
// portionFrites : Produit[] | null = null
@Input('tailleBoisson') tailleBoisson: any | null=null 
@Input('tailleBoissons') tailleBoissons: any | null=null 
@Input('tailleBoissonss') tailleBoissonss: any | null=null 
@Input('portionFrites') portionFrites: any | null=null 
// @Input() tailleBoisson : Produit[] | null = null


  constructor() { }

  ngOnInit(): void {
  }

  valid(a:any,n:any){

    let b=(<HTMLInputElement>document.getElementById("input"+a)).value;
    let span=(<HTMLInputElement>document.getElementById("erreur"+a))
    if(b==n){

     span.innerHTML="Quantité atteinte!!!"
      
    }
    console.log(b);
    
  }


}
