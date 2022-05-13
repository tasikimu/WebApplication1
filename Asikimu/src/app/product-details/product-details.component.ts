import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  products: any [] = [];
  displayedImg = 0;
  
  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    // First get the product id from the current route.
    // const id = +this.route.snapshot.params['Id'];
    // const routeParams = this.route.snapshot.paramMap;
    // const productIdFromRoute = Number(routeParams.get('productId'));
  
    // // Find the product that correspond with the id provided in route.
    // this.product = this.productService.getProduct(id);
    // this.product = products.find(product => product.id === productIdFromRoute);
  
    this.productService.getProduct().subscribe((products: any) => {
      console.log(products);
      this.products = products;
    });
  }

  addToCart(product: any){
    this.cartService.addItem(product)
  }

}
