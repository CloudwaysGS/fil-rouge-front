import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/shared/models/produits';

@Component({
  selector: 'abs-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  @Input() produits:Produit[]|undefined=undefined

  constructor() { }

  ngOnInit(): void {
  }

}
