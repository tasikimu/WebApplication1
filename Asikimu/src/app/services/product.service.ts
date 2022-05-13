import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // products: Product[] =[
  //   new Product(
  //     1,
  //     'Harry Potter and the Chamber of Secrets.',
  //     'Harry and friends return to Hogwarts with a bang — the bang of a flying Ford Anglia as it crashes into the Whomping Willow, that is.',
  //     600,
  //     1,
  //     ['assets/images/1.jpg', 'assets/images/2.jpg' ,'assets/images/three.jpg']
  //   ),
  //   new Product(
  //     2,
  //     'Harry Potter and the Goblet of Fire',
  //     'Harry returns to Hogwarts for his fourth year of school',
  //     500,
  //     1,
  //     ['assets/images/4.jpg', 'assets/images/5.jpg' ,'assets/images/6.jpg']
  //   ),
  //   new Product(
  //     3,
  //     'Harry Potter and the Prisoner of Azkaban',
  //     'As a result, swarms of Dementors — dark, faceless beings that “suck the soul” out of their victims and serve as the guards of Azkaban — infiltrate',
  //     700,
  //     1,
  //     ['assets/images/7.jpg', 'assets/images/8.jpg' ,'assets/images/9.jpg']
  //   )
  // ]
  public product: Observable<Product>;
  readonly rootUrl = environment.apiUrl;


  constructor(private http: HttpClient) { }

   getProduct():Observable<any>{
    return this.http.get(`${environment.apiUrl}/api/Product`).pipe(map((response: any) => response));

  }

  // getProduct(id: number){
  //   return this.products.find(product =>
  //     product.Id === id);
  // }

//   getProducts(){
//     return this.http.get<Product[]>(`${environment.apiUrl}/api/Product`);
//   }

//   getProduct(id: number){
//     return this.products.find(product =>
//       product.Id === id);
//   }
// }
}
