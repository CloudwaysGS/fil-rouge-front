import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/shared/models/produits';

@Component({
  selector: 'abs-all-boisson',
  templateUrl: './all-boisson.component.html',
  styleUrls: ['./all-boisson.component.css']
})
export class AllBoissonComponent implements OnInit {

produits : Produit[] | null = null
portionFrites : Produit[] | null = null
tailleBoisson : any[] | null = null


  constructor() { }

  ngOnInit(): void {
  }

}
