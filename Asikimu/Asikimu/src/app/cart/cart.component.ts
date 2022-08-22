import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../models/order';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';
import { CheckoutService } from '../services/checkout.service';
import { UserService } from '../services/user.service';
import { BehaviorSubject } from 'rxjs';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  items: any[] = [];
  total: number;
  public cartitems: any = [];
  public products = new BehaviorSubject<any>([]);

  // product: Order;
  // items = this.cartService.getItems();



  constructor(private cartService: CartService, public userService: UserService, private route: Router, private order: CheckoutService, private notification: NotificationService) { }

  ngOnInit() {
      this.items = this.cartService.cartItems.value;

      if(this.items) this.getTotal(this.items)
  }

  onDelete(i: any){
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

  checkout() {
    if (this.userService.isLoggedIn)
    {
      this.route.navigate(["/checkout"]);
    //   this.cartService.clearCart();
    // localStorage.removeItem('cart'); 
    // this.notification.showSuccess("Order Submitted Successfully.", "Success")
    }
  // checkout(product: any) {
  //   if (this.userService.isLoggedIn)
  //   {
  //     this.order.SubmitOrder(product).subscribe(x => {
  //       console.log(x);
  //     })
  //     // this.route.navigate(["/checkout"]);
  //   }
    else
    {
      this.route.navigate(["/login"])
    }
  }
}
