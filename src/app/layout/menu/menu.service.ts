import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Menuchangeevent } from '../interface/menuchangeevent';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }
  private menuSource = new Subject<Menuchangeevent>();
    private resetSource = new Subject();

    menuSource$ = this.menuSource.asObservable();
    resetSource$ = this.resetSource.asObservable();

    onMenuStateChange(event: Menuchangeevent) {
        this.menuSource.next(event);
    }

    reset() {
        this.resetSource.next(true);
    }
}
