import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MessageService } from 'primeng/api';
import { AuthloginService } from '../services/authlogin.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authservice: AuthloginService,
    private messageService: MessageService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authservice.loggedIn) {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login Successfully' });
      return true;
    }
    this.messageService.add({ severity: 'error', summary: 'Please Log in first', detail: 'Unauthorized' });
    return false;
  }
}
