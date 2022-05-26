import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  placeholder =  []
  cartItems = new BehaviorSubject([])

  constructor(private http: HttpClient) {
    //retrieving data from localstorage everytime the site loads/checking
    const ls = this.getCartData();

    if(ls) this.cartItems.next(ls);
   }
   

  addItem(product: Product) {
    const ls = this.getCartData();

    let exist: Product;

    if(ls)
    exist = ls.find((item) => {
      return item.id === product?.id;
    });

    if(exist){
      exist.quantity++;
      this.setCartData(ls);
    }
    else{
      if(ls){
        const  newData = [...ls, product];
        this.setCartData(newData);
      }
        this.placeholder.push(product);
        this.setCartData(this.placeholder);
    }
  }

  //method to set data to the localstorage
  setCartData(data: any){
    localStorage.setItem('cart', JSON.stringify(data));
    this.cartItems.next(this.getCartData());
  }

  //method to get data from localstorage
  getCartData(){
    return JSON.parse(localStorage.getItem('cart'));
  }


  getShippingPrices(){
    return this.http.get<{type: string, Price: number}[]>(
      '/assets/shipping.json');
  }


  //   const exist = this.cartItems.find((item) => {
  //     return item === product.id;
  //   });
  //   if(exist)
  //   exist.qty++;
  //   else
  //   this.cartItems.push(product);
  //   this.numOfItems.next(this.cartItems);
  // }

  // addToCart(product: Product) {
  //   this.cartItems.push();
  // }

  getItems() {
    return this.cartItems;
  }

  clearCart() {
    return this.cartItems;
  }
}
