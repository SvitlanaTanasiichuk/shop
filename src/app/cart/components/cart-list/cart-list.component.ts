import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { IProduct } from '../../../products/models/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  shoppingList$: Observable<IProduct[]>;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.shoppingList$ = this.cartService.getCartList();
  }

  traCkByProduct(index: number, product: IProduct): number {
    return product.id;
  }

}
