import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly rootUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getProduct(): Observable<any>{
    return this.http.get(`${environment.apiUrl}/api/Product`);
  }

  getProductById(id: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/api/Product/${id}`);
  }

//   getProducts(){
//     return this.http.get<Product[]>(`${environment.apiUrl}/api/Product`);
//   }

//   getProduct(id: number){
//     return this.products.find(product =>
//       product.Id === id);
//   }
// }
}
