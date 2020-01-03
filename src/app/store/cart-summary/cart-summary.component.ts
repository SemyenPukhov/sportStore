import { Component, OnInit } from '@angular/core';

import { Cart } from './../../model/cart.model';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'cart-summary',
  templateUrl: './cart-summary.component.html',
})
export class CartSummaryComponent implements OnInit {
  public faCart = faShoppingCart;

  constructor(public cart: Cart) {}

  ngOnInit() {}
}
