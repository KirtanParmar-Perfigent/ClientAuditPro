import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '', component: LayoutComponent,
        children: [
          { path: 'uikit', loadChildren: () => import('./components/uikit/uikit.module').then(m => m.UikitModule) },
        ]
      },
    ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
