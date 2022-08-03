import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Catalogue } from 'src/app/shared/models/catalogue';
import { Detail, Menu } from 'src/app/shared/models/details';
import { CatalogueStoreService } from 'src/app/shared/services/catalogue-store.service';

@Component({
  selector: 'abs-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  produits: any
  
  // produits : Menu| null = null;

  constructor(private serv:CatalogueStoreService,private route: ActivatedRoute) { }

  ngOnInit(): void {

    // this.id = this.route.snapshot.paramMap.get('id');
    // this.type = this.route.snapshot.paramMap.get('type');
    // alert("ok")
        this.serv.produit$(66).subscribe((data)=>{
           this.produits=data
        })
        console.log(this.produits)
  }

}
