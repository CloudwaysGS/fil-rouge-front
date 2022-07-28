import { Component, OnInit } from '@angular/core';
import { Catalogue } from 'src/app/shared/models/catalogue';
import { CatalogueStoreService } from 'src/app/shared/services/catalogue-store.service';
// import { Catalogue } from '../../shared/models/catalogue';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  catalogue: Catalogue|undefined
  constructor(private serv:CatalogueStoreService) { }

  ngOnInit(): void {
    this.serv.all().subscribe( (data)=> this.catalogue = data)
    console.log(this.serv.all())
  }

}
