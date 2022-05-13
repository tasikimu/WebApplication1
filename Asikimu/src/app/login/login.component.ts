import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  returnUrl: string;

  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder ) {
   
   }
   loginForm: FormGroup;
   isSubmitted  =  false;
   get formControls() { return this.loginForm.controls; }

   login(){
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.userService.login(this.loginForm.value);
    this.router.navigateByUrl('');
    // data => {
    //   this.router.navigate([this.returnUrl]);
    // }
    // error => {
    //   this.error = error;
    //   this.loading =false;
    // }
  }

  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
        UserName: ['', Validators.required],
        Password: ['', Validators.required]
    });
}

  // model : any={}; 

    
  // errorMessage:string;    
  // constructor() { }    
    
    
  // ngOnInit() {    
  //   localStorage.getItem('UserName');
    // localStorage.removeItem('UserName');    
    // localStorage.clear();    
  }

  // login(){    
  //   debugger;    
  //   this.LoginService.Login(this.model).subscribe(    
  //     data => {    
  //       debugger;    
  //       if(data.Status=="Success")    
  //       {       
  //         this.router.navigate(['./Appcomponent']);  
  //         sessionStorage.getItem('UserName');  
  //         debugger;    
  //       }    
  //       else{    
  //         this.errorMessage = data.Message;    
  //       }    
  //     },    
  //     error => {    
  //       this.errorMessage = error.message;    
  //     });    
  // };    