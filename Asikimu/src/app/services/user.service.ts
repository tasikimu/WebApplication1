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
  private userSubject: BehaviorSubject<Users>;
  public user: Observable<Users>;


  constructor(private http: HttpClient, private router: Router) { }

  registerUser(user : Users){
    return this.http.post(`${this.rootUrl}/api/User/Register` , user);
  }

  public login(user: Users){
    return this.http.post<Users>(`${environment.apiUrl}/User/`, {user })
    .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
    }));
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  
  }
  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
}
}
