import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Catalogue } from '../models/catalogue';
// import { Catalogue } from 'src/app/client/shared/models/catalogue';

@Injectable({
  providedIn: 'root'
})
export class CatalogueStoreService {
  private abs_url:string="http://localhost:3000/produit"

  constructor(private http:HttpClient) { }
  all():Observable<Catalogue>{
    return this.http.get<Catalogue>(this.abs_url).pipe(
      map(data=>{
        console.log(data)
        data.produits=[...data.menus,...data.burgers]
        return data
        tap(console.log)

        // console.log(data)
      }),
    )
  }
}
