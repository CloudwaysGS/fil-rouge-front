import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/shared/models/produits';
// import { Produit } from '../../shared/models/produit';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() produits : Produit|null = null;

constructor() { }

  ngOnInit(): void {
  }

}
