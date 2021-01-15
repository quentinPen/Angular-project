import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() productsCart
  @Input() total
  @Output() removeFromCartEvent: EventEmitter<number> = new EventEmitter<number>();

  removeToCartClick(){
    this.removeFromCartEvent.emit(this.productsCart.id)
  }
 

  faShoppingCart = faShoppingCart
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void {
  }

}
