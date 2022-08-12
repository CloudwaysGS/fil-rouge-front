import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Catalogue } from 'src/app/shared/models/catalogue';
import { Detail, Menu } from 'src/app/shared/models/details';
import { Panier } from 'src/app/shared/models/panier';
import { Produit } from 'src/app/shared/models/produits';
import { CatalogueStoreService } from 'src/app/shared/services/catalogue-store.service';
import { PanierService } from 'src/app/shared/services/panier.service';

@Component({
  selector: 'abs-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  produits: any

  constructor(private serv:CatalogueStoreService,private route: Router,private panierServ:PanierService) { }

  ngOnInit(): void {
  
  let k = this.route.url.split('/')[(this.route.url.split('/').length)-1]
  this.serv.produit$(k).subscribe((data)=>{ 
  this.produits=data
  // console.log(data)
        })
  }

  valid(a:any,n:any){

    let b=(<HTMLInputElement>document.getElementById("input"+a)).value;
    let span=(<HTMLInputElement>document.getElementById("erreur"+a))
    if(b==n){
     span.innerHTML="Quantité atteinte!!!"
    }
    console.log(b);
  }

  valider(b:any,c:any){
    // alert("ok")
    let produits
  }

  addNum(produit:Produit, qte:any){
  
   
    this.panierServ.addPanier(produit,qte)
    console.log(this.panierServ.panier.value)
    //f['quantite']=g
    //this.panierServ.addToCart(f)
  }

  addBoissonMenu(boisson:Produit,menuId:any){
    boisson.quantite=1
     let produit=  this.panierServ.panier.value.produits.find(p=> p.id==menuId)
      if(produit) produit.boissons?.push(boisson)
      console.log(produit)
  
  }

  changeQteBoissonMenu(boissonId:any,qte:any,menuId:any){

          let menu=  this.panierServ.panier.value.produits.find(p=> p.id==menuId)
          let boisson =menu?.boissons?.find(p=>p.id==boissonId)
          if(boisson) boisson.quantite=qte;
          console.log(boisson)
  }

}
