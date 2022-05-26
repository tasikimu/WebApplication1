import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private notification: NotificationService, private userService: UserService, private router: Router, private formBuilder: FormBuilder ) {

   }
   loginForm: FormGroup;
   isSubmitted  =  false;
   public invalidLogin: boolean = false;



   login(){
    // console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      this.notification.showError("Invalid Login", "error")

      return;
    }
     this.userService.login(this.loginForm.value).subscribe((token: any) => {
    localStorage.setItem('Token', token);
    this.notification.showSuccess("User login successful", "Success")
    this.router.navigateByUrl('/cart');
     });

  }

  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
        UserName: ['', [Validators.required]],
        Password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
    });

}
  get formControls() { return this.loginForm.controls; }
}
