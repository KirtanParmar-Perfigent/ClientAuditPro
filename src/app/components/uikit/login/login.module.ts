import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { CptoastComponent } from '../cptoast/cptoast.component';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  declarations: [
    LoginComponent,
    CptoastComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    PanelModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ToastModule,
    PasswordModule,
    CheckboxModule
  ]
})
export class LoginModule { }
