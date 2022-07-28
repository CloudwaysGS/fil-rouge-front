import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Catalogue } from 'src/app/shared/models/catalogue';
import { Produit } from 'src/app/shared/models/produits';
import { CatalogueStoreService } from 'src/app/shared/services/catalogue-store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() produits:Produit[]|undefined
  catalogue:Catalogue|undefined
    // produits$:Observable<Produit[]>|null=null

  constructor(private serv:CatalogueStoreService) { }

  ngOnInit(): void {
    // this.produits=this.serv.all()
    this.serv.all().subscribe( (data)=> this.catalogue = data)

    // alert("ok")
  }

}
