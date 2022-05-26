import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from '../users.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly rootUrl = environment.apiUrl;
  public user: Observable<Users>;


  constructor(private http: HttpClient, private router: Router) { }


  registerUser(user : Users){
    return this.http.post(`${this.rootUrl}/api/User/Register` , user);
  }

  public login(user: Users){

    return this.http.post(`${this.rootUrl}/api/Login`, user, {responseType: 'text'});

  }


  get isLoggedIn() {
    return localStorage.getItem('Token');
  }
  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('Token') !== null;
    this.router.navigate(['/login']);
}
}
