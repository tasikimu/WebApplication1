import { HttpClient,  } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  getBooks() {
    throw new Error('Method not implemented.');
  }
  Url : string;
  token : string;
  header : any;
  books: any;

  constructor(private http: HttpClient) {}
} 
