import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitreminderComponent } from './visitreminder.component';

const routes: Routes = [{path : '', component:VisitreminderComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitreminderRoutingModule { }
