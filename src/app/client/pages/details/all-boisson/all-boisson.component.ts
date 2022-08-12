import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/shared/models/produits';
import { PanierService } from 'src/app/shared/services/panier.service';

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
@Input('typeBoisson') type:string='boissons'

  constructor(private panierService:PanierService) { }

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
  addBoisson(produit:Produit){
    produit.quantite=1
   if(this.type=="boissons")
       this.panierService.panier.value.boissons.push(produit)
  if(this.type=="portions")
       this.panierService.panier.value.portions.push(produit)
   console.log(this.panierService.panier.value)
  }

  changeQteBoisson(boissonId:any,qte:any){
    let produit;
        if(this.type=="boissons")
          produit =this.panierService.panier.value.boissons.find(p=>p.id==boissonId)
        if(this.type=="portions")
          produit =this.panierService.panier.value.portions.find(p=>p.id==boissonId)
          
          if(produit) produit.quantite=qte;
        console.log(this.panierService.panier.value)
  }

}
