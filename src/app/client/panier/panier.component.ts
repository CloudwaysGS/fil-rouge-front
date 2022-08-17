import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/shared/models/produits';
import { PanierService } from 'src/app/shared/services/panier.service';

@Component({
  selector: 'abs-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

somme=0
  constructor(private panierServ:PanierService) { }

  items$=this.panierServ.items$

  ngOnInit(): void {
  this.items$=this.panierServ.items$
  this.calculSomme()

  }

  remove(a:any){
    // alert("ok")
    this.panierServ.removePanier(a)
  }

  calculSomme(){

    this.somme=this.panierServ.PricePanier()
  }

  priceProduit(produit:any,quantite:any){
    this.panierServ.increment(produit, quantite)
  }
}
