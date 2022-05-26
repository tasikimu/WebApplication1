import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import {ActivatedRoute} from '@angular/router';
import { Product } from '../product.model';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;
  displayedImg = 0;

  constructor(private notification: NotificationService ,private productService: ProductService, private cartService: CartService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // First get the product id from the current route.
    const id = +this.route.snapshot.params['id'];

    // Find the product that correspond with the id provided in route.
    this.productService.getProductById(id).subscribe((product: any) => {
      // console.log(products);
      this.product = product;
    });
  }

  addToCart(product: any){
    this.cartService.addItem(product)
    this.notification.showSuccess("Item was added successfully", "Success")
  }

}
