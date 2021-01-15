import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  stock = Math.floor((Math.random() * 50) + 1);
  @Input() id: number
  @Input() title: string
  @Input() price: number
  @Input() description: string
  @Input() category: string
  @Input() image: string
  @Input() bgColor
  @Output() addToCartEvent: EventEmitter<number> = new EventEmitter<number>();

  faShoppingCart = faShoppingCart
  addToCartClick(){
    this.addToCartEvent.emit(this.id)
  }
  constructor() { }

  ngOnInit(): void {

  }

}
