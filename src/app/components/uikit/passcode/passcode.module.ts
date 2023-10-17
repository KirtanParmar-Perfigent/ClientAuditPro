import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasscodeRoutingModule } from './passcode-routing.module';
import { PasscodeComponent } from './passcode.component';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    PasscodeComponent
  ],
  imports: [
    CommonModule,
    PasscodeRoutingModule,
    PanelModule,
    TableModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
  ]
})
export class PasscodeModule { }
