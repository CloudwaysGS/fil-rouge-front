import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { Detail } from 'src/app/shared/models/details';
import { Produit } from 'src/app/shared/models/produits';
import { DetailsComponent } from '../../pages/details/details.component';
// import { Produit } from '../../shared/models/produit';


@Component({
  selector: 'abs-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  // details: Detail;
  @Input() produits : Produit|null = null;

constructor() { }

  ngOnInit(): void {
    // const idDetail = this.route.snapshot.params['id']
    // console.log(idDetail)
  }

}
