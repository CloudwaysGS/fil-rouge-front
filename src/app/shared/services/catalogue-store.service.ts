import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Catalogue } from '../models/catalogue';
import { Produit } from '../models/produits';
// import { Catalogue } from 'src/app/client/shared/models/catalogue';

@Injectable({
  providedIn: 'root'
})
export class CatalogueStoreService {
  private abs_url:string="http://localhost:3000/catalogues"
  private urlDetail:string = "http://localhost:3000/detail"

  constructor(private http:HttpClient) { }
  all():Observable<Catalogue>{
    return this.http.get<any>(this.abs_url).pipe(
      
      map(data=>{
       // data.produits=[...data[0].menus,...data[1].burgers]
         let catalogue:Catalogue={
             menus:data['hydra:member'][1].menu ,
             burgers:data['hydra:member'][0].burger,
             produits:[...data['hydra:member'][1].menu,...data['hydra:member'][0].burger]
        }
        return catalogue
      }),
    )
  }

  // burgers():Observable<Catalogue> { 
  //   return this.http.get<Catalogue>(this.abs_url).pipe(
  //     map(data=>{
  //       data.produits=[...data.burgers]
  //       return data
  //     }),
  //   )
  // }
  // menus():Observable<Catalogue> { 
  //   return this.http.get<Catalogue>(this.abs_url).pipe(
  //     map(data=>{
  //       data.produits=[...data.menus]
  //       return data
  //     }),
  //   )
  // }

  // produit$(id:number,type:string):Observable<Detail> {
  //   if(type=="menu"){
  //     return this.http.get<Detail>(`${this.urlDetail}/menus/${id}`)
  //   }
  //   return this.http.get<Detail>(`${this.urlDetail}/burgers/${id}`)
    
  // }
 
}
