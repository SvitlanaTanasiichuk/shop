import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { products } from '../../shared/mocks';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<IProduct[]> {
    return of(products);
  }
}
