import { Injectable } from '@angular/core';
import { BehaviorSubject, map,Observable,take } from 'rxjs';
import { Produit } from '../models/produits';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor() {
    let existingCartItems = JSON.parse(localStorage.getItem('products')||'[]');
    if (!existingCartItems) {
      existingCartItems = [];
    }
    this.itemsSubject.next(existingCartItems);
  }

  private itemsSubject = new BehaviorSubject<Produit[]>([]);
  items$:Observable<any> = this.itemsSubject.asObservable();

  addToCart(product: any) {
    this.items$.pipe(
      take(1),
      map((products) => {
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
      }),
    ).subscribe();
  }
}
