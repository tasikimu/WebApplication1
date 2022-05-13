import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted = false;


  form : FormGroup;
  get formControls() { return this.form.controls; }


  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder,) { }

  onFormSubmit() 
  {
    this.submitted = true;
    if(this.form.invalid){
      return;
    }

    this.userService.registerUser(this.form.value).subscribe((data: any) => {
      if (data.Success == true) this.form.reset();
    });
    this.userService.registerUser(this.form.value);
    this.router.navigateByUrl('/cart');
  }

  ngOnInit(){
    this.form = this.formBuilder.group({
      UserName: ['', Validators.required],
      Fullname: ['', Validators.required],
      Address: ['', Validators.required],
      Email: ['', Validators.required, Validators.email],
      Password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  // resetForm(form?: NgForm){
  //   if(form != null)
  //   form.reset();
  // }

  // convenience getter for easy access to form fields
  // get f(){
  //   return this.form.controls;
  // }

}
