import { Component, Input, OnInit } from '@angular/core';

import { IProduct } from '../../../products/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() product: IProduct;

  constructor() { }

  ngOnInit(): void {
  }

}
