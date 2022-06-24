import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted = false;


  form : FormGroup;

  get formControls()
  {
    return this.form.controls;
  }


  constructor(private notification: NotificationService ,private userService: UserService, private router: Router, private formBuilder: FormBuilder,) { }

  onFormSubmit()
  {
    this.submitted = true;
    if(this.form.invalid){
      this.notification.showError("Please make sure all the inputs are filled correctly", "Error")

      return;
    }

    this.userService.registerUser(this.form.value).subscribe((data: any) => {
      if (data.Success == true) this.form.reset();
    });
    this.userService.registerUser(this.form.value);
    this.notification.showSuccess("New user registered successfully", "Success")
    this.router.navigateByUrl('/login');
  }

  ngOnInit(){
    this.form = this.formBuilder.group({
      UserName: ['', [Validators.required, Validators.minLength(5)]],
      Fullname: ['', [Validators.required]],
      Address: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
}
