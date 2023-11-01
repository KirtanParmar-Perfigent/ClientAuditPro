import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthloginService } from '../services/authlogin.service';
import { CptoastComponent } from '../cptoast/cptoast.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{

  constructor(private fb : FormBuilder, private authloginService : AuthloginService, private router : Router) {}
  
  loginform! : FormGroup;
  temp! : Boolean;
  @ViewChild(CptoastComponent) toastComponent! : CptoastComponent;
  
  ngOnInit(): void {
    this.loginform = this.fb.group({
      userName : ['', Validators.required],
      password  :['',Validators.required]
    })
  }

  isLogin()
  {
    console.log(this.loginform.value);
    this.temp = this.authloginService.login(this.loginform.value.userName, this.loginform.value.password);
    if(this.temp)
    {
      this.toastComponent.showSuccessToast("Login Successfully");
      this.router.navigate(['/uikit/dashboard']);
    }
    else
    {
      this.toastComponent.showErrorToast("Username or Password wrong");
    }
  }
}
