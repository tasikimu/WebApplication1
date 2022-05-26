import { Component } from '@angular/core';
import { CartService } from './services/cart.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Login Page';
  itemInCart: number;

  showButtons: boolean = true;

  constructor(private cartService: CartService, public userService: UserService){}

  ngOnInit(){
    this.cartService.cartItems.subscribe(d => {
      this.itemInCart = d.length
      // console.log(d);
    })

  }

  logout(){
  this.userService.logout();

  }

}
