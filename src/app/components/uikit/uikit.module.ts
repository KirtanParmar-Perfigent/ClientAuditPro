import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UikitRoutingModule } from './uikit-routing.module';
import { AuthGuard } from './guard/auth.guard';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    UikitRoutingModule,
  ],
  providers: [MessageService, AuthGuard]
})
export class UikitModule { }
