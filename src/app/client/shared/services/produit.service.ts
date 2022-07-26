import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private url:string="http://localhost:3000/produit"

  constructor(private http:HttpClient) { }

  All():Observable<Produit[]>{
    return this.http.get<Produit[]>(this.url)
  }
}
