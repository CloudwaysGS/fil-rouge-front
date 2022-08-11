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

  constructor(private serv:CatalogueStoreService,private route: Router) { }

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

}
