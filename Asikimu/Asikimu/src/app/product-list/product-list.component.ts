import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';
import { NotificationService } from '../services/notification.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: any[] = [];
  displayedImg = 0;

  constructor(private productService: ProductService, private cartService: CartService, private notification: NotificationService) { }

  ngOnInit(): void {
    this.productService.getProduct().subscribe((products: any) => {
      console.log(products);
      this.products = products;
    });
  }

  addToCart(product: Product){
    this.cartService.addItem(product);
    this.notification.showSuccess("Item added successfully", "Success")
  }

  // ngOnInit(): void {
  //   this.productService.getProducts().subscribe((products: Product[]) => {
  //     console.log(products);
  //     this.products = products;
  //   });
  // }

}
