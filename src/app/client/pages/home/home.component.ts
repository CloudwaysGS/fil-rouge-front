import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../../shared/models/produit';
import { ProduitService } from '../../shared/services/produit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  produits$:Observable<Produit[]>|null=null

  constructor(private service:ProduitService) { }

  ngOnInit(): void {
    this.produits$=this.service.All()
  }

}
