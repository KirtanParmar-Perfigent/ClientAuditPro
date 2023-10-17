import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { 
    path: 'login', 
    data: { breadcrumb: 'Login' }, 
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  { 
    path: 'company',
    data: { breadcrumb: 'CompanyTable' }, 
    loadChildren: () => import('./company/company.module').then(m => m.CompanyModule), canActivate:[AuthGuard] 
  },
  { 
    path: 'category', 
    data: { breadcrumb: 'Category' }, 
    loadChildren: () => import('./category/category.module').then(m => m.CategoryModule),canActivate:[AuthGuard] 
  },
  { 
    path: 'companycategory', 
    data: { breadcrumb: 'CompanyCategory' }, 
    loadChildren: () => import('./companycategory/companycategory.module').then(m => m.CompanycategoryModule),canActivate:[AuthGuard] 
  },
  { 
    path: 'customer', 
    data: { breadcrumb: 'Customer' }, 
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule),canActivate:[AuthGuard] 
  },
  { 
    path: 'location', 
    data: { breadcrumb: 'Location' }, 
    loadChildren: () => import('./location/location.module').then(m => m.LocationModule),canActivate:[AuthGuard] 
  },
  { 
    path: 'notes', 
    data: { breadcrumb: 'Notes' }, 
    loadChildren: () => import('./notes/notes.module').then(m => m.NotesModule),canActivate:[AuthGuard] 
  },
  { 
    path: 'password', 
    data: { breadcrumb: 'Password' }, 
    loadChildren: () => import('./passcode/passcode.module').then(m => m.PasscodeModule),canActivate:[AuthGuard] 
  },
  { 
    path: 'role', 
    data: { breadcrumb: 'Role' }, 
    loadChildren: () => import('./role/role.module').then(m => m.RoleModule),canActivate:[AuthGuard] 
  },
  { 
    path: 'userrole', 
    data: { breadcrumb: 'UserRole' }, 
    loadChildren: () => import('./userrole/userrole.module').then(m => m.UserroleModule),canActivate:[AuthGuard] 
  },
  { 
    path: 'users', 
    data: { breadcrumb: 'Users' }, 
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),canActivate:[AuthGuard] 
  },
  { 
    path: 'visitreminder', 
    data: { breadcrumb: 'VisitReminder' }, 
    loadChildren: () => import('./visitreminder/visitreminder.module').then(m => m.VisitreminderModule),canActivate:[AuthGuard] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UikitRoutingModule { }