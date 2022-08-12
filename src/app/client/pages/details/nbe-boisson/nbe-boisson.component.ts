import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/shared/models/produits';

@Component({
  selector: 'abs-nbe-boisson',
  templateUrl: './nbe-boisson.component.html',
  styleUrls: ['./nbe-boisson.component.css']
})
export class NbeBoissonComponent implements OnInit {

  @Input() produit : Produit | undefined = undefined
  @Input() produits : Produit | undefined = undefined
// produits:Produit | null = null

  constructor() { }

  ngOnInit(): void {
  }
  valid(){
    alert('ok')
    // let input=document.querySelector('input')
    // console.log(input)
  }
}
