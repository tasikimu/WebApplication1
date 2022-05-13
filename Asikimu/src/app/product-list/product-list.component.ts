import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: any[] = [];
  displayedImg = 0;

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productService.getProduct().subscribe((products: any) => {
      console.log(products);
      this.products = products;
    });
  }

  addToCart(product: Product){
    this.cartService.addItem(product)
  }

  // ngOnInit(): void {
  //   this.productService.getProducts().subscribe((products: Product[]) => {
  //     console.log(products);
  //     this.products = products;
  //   });
  // }

}
