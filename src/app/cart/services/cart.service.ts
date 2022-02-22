import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduct } from '../../products/models/product';
import { products } from '../../shared/mocks';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getCartList(): Observable<IProduct[]> {
    return of(products);
  }
}
