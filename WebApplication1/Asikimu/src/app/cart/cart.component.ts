import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  items: any[] = [];
  total: number;
  // items = this.cartService.getItems();



  constructor(private cartService: CartService) { }

  ngOnInit() {
      this.items = this.cartService.cartItems.value;

      if(this.items) this.getTotal(this.items)
  }

  onDelete(i: number){
    this.items.splice(i, 1);
    this.getTotal(this.items);
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  validateInput(event: any, i: number){
    const quantity = +event.target.value;
    if(quantity < 1){
    event.target.value = this.items[i].quantity;
    return;
    }
    this.QtyUpdate(quantity, i)
  }

  private QtyUpdate(quantity: number, i: number){
    this.items[i].quantity = quantity;
    this.getTotal(this.items)
  }

  getTotal(data: any){
    let subs = 0;
    for(const item of data)
    subs += item.price * item.quantity;

    this.total = subs;
  }
}
