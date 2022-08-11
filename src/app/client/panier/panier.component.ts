import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/shared/models/produits';
import { PanierService } from 'src/app/shared/services/panier.service';

@Component({
  selector: 'abs-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {


  constructor(private panierServ:PanierService) { }

  items$=this.panierServ.items$
  ngOnInit(): void {
  }


}
