import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { CheckoutService } from '../services/checkout.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  items: Product[];

  constructor(private checkout: CheckoutService, public userService: UserService) { }

  ngOnInit(): void {
  }

  // CheckoutOrder(){
  //   this.checkout.order(this.product);
  // }

}
