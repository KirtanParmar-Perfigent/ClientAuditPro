import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitreminderRoutingModule } from './visitreminder-routing.module';
import { VisitreminderComponent } from './visitreminder.component';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    VisitreminderComponent
  ],
  imports: [
    CommonModule,
    VisitreminderRoutingModule,
    PanelModule,
    TableModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
  ]
})
export class VisitreminderModule { }
