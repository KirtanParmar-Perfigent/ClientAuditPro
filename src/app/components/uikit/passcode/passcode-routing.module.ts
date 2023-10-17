import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasscodeComponent } from './passcode.component';

const routes: Routes = [{path : '', component:PasscodeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasscodeRoutingModule { }
