import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanycategoryComponent } from './companycategory.component';

const routes: Routes = [{path : '', component:CompanycategoryComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanycategoryRoutingModule { }
