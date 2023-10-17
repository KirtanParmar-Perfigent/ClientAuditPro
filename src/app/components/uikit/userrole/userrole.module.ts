import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserroleRoutingModule } from './userrole-routing.module';
import { UserroleComponent } from './userrole.component';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    UserroleComponent
  ],
  imports: [
    CommonModule,
    UserroleRoutingModule,
    PanelModule,
    TableModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
  ]
})
export class UserroleModule { }
