import { Component, OnInit } from '@angular/core';
import { Catalogue } from 'src/app/shared/models/catalogue';
import { Produit } from 'src/app/shared/models/produits';
import { CatalogueStoreService } from 'src/app/shared/services/catalogue-store.service';
// import { Catalogue } from '../../shared/models/catalogue';

@Component({
  selector: 'abs-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  produits: any
  loading: Produit[]| null = null;
  constructor(private serv:CatalogueStoreService) { }

  ngOnInit(): void {
    this.serv.all().subscribe((data)=>this.produits = data.produits)
  }

  clickchanged(type:string){
      // alert("ok");
      switch (type) {
        case "burger":
        this.serv.all().subscribe((data)=>this.produits = data.burgers)
        break;
        case "menu":
        this.serv.all().subscribe((data)=>this.produits = data.menus)
        break;
        case "catalogue":
        this.serv.all().subscribe((data)=>this.produits = data.produits)
        break;
      
        default:
          break;
      }
  }

}
