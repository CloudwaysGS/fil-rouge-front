import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/shared/models/produits';

@Component({
  selector: 'abs-all-boisson',
  templateUrl: './all-boisson.component.html',
  styleUrls: ['./all-boisson.component.css']
})
export class AllBoissonComponent implements OnInit {

@Input('boisson') boisson : Produit | null = null
@Input('portionFrites') portionFrites : Produit | null = null

  constructor() { }

  ngOnInit(): void {
  }

}
