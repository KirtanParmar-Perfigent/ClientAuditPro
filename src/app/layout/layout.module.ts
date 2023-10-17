import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';
import { MenuitemComponent } from './menuitem/menuitem.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
// import { CptoastComponent } from '../components/uikit/cptoast/cptoast.component';

@NgModule({
  declarations: [
    TopbarComponent,
    LayoutComponent,
    MenuComponent,
    MenuitemComponent,
    SidebarComponent,
    // CptoastComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ToastModule
  ],
  providers: [MessageService]
})
export class LayoutModule { }
