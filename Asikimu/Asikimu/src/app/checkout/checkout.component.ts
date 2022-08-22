import { Component, OnInit } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';
import { CheckoutService } from '../services/checkout.service';
import { NotificationService } from '../services/notification.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  items: Product[];
  paymentHandler: any = null;
  total: number;

  constructor(private cartservice: CartService, public userService: UserService, private notification: NotificationService) { }

  ngOnInit(): void {
    this.invokeStripe()
  }

  makepayment(amount: number){
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51LTKxJAsXiYXNoyRahpmf6BGBfpXB6shBP18GWH63giQiLqk2SPGxRZSaiNfaRLRDVCJseqWc4wMjInYpG2Xz6Q000McwV6bWK',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
      },
    });
    paymentHandler.open({
    name: "The Wizard BookShop",
    description: "It's all about fantasy",
    amount: amount * 100,
    })
    // this.notification.showSuccess("Purchase was successfull", "Success");
    this.cartservice.clearCart();
    localStorage.removeItem('cart');
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51LTKxJAsXiYXNoyRahpmf6BGBfpXB6shBP18GWH63giQiLqk2SPGxRZSaiNfaRLRDVCJseqWc4wMjInYpG2Xz6Q000McwV6bWK',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
          },
        });
      };
 
      window.document.body.appendChild(script);
    }

  // CheckoutOrder(){
  //   this.checkout.order(this.product);
  // }
  }

}
