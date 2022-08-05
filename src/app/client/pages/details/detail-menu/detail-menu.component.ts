import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/shared/models/produits';

@Component({
  selector: 'abs-detail-menu',
  templateUrl: './detail-menu.component.html',
  styleUrls: ['./detail-menu.component.css']
})
export class DetailMenuComponent implements OnInit {
@Input() boisson : Produit | undefined = undefined
@Input('boissons') boissons : Produit | null = null

produits: any

  constructor() { }

  ngOnInit(): void {
  }

}
