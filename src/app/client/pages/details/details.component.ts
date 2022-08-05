import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Catalogue } from 'src/app/shared/models/catalogue';
import { Detail, Menu } from 'src/app/shared/models/details';
import { Produit } from 'src/app/shared/models/produits';
import { CatalogueStoreService } from 'src/app/shared/services/catalogue-store.service';

@Component({
  selector: 'abs-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  produits: any
  portionFrites:Produit[]
  // produits : Menu| null = null;
  | undefined
  // produits : Menu| null = null;

  constructor(private serv:CatalogueStoreService,private route: Router) { }

  ngOnInit(): void {
    // this.id = this.route.snapshot.params.get('id');
    // this.type = this.route.snapshot.params.get('type');
    // alert("ok")
  let k = this.route.url.split('/')[(this.route.url.split('/').length)-1]
  console.log(k)
  this.serv.produit$(k).subscribe((data)=>{ 
  this.produits=data
  console.log(this.produits.produit.menuTailleBoisson[0].tailleBoison.boissonTailleBoissons[0].boisson)
        })
        // console.log(this.produits.produit.menuTailleBoisson[0].tailleBoison.boissonTailleBoissons[0].boisson)
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
