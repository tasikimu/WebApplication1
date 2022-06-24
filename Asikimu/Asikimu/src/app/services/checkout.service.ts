import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class CheckoutService {

  readonly rootUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  SubmitOrder(order: Order){
      return this.http.post(`${this.rootUrl}/api/Order`, order, {responseType: 'text'});
    }
}
