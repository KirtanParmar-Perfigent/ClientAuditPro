import { Component } from '@angular/core';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  model: any[] = [];

  constructor(public layoutService: LayoutService) { }

  ngOnInit() {
      this.model = [
        {
          label: 'Home',
          items: [
              { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
          ]
      },
          {
              label: 'UI Components',
              items: [
                  { label: 'Company', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/company'] },
                  { label: 'Category', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/category'] },
                  { label: 'CompanyCategory', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/companycategory'] },
                  { label: 'Customer', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/customer'] },
                  { label: 'Location', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/location'] },
                  { label: 'Notes', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/notes'] },
                  { label: 'Password', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/password'] },
                  { label: 'Role', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/role'] },
                  { label: 'UserRole', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/userrole'] },
                  { label: 'Users', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/users'] },
                  { label: 'VisitReminder', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/visitreminder'] },
              ]
          },
      ];
  }
}
