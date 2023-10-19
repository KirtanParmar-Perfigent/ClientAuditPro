import { Component } from '@angular/core';
import { ApiClient } from '../ApiClient';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.scss']
})
export class TempComponent {
  constructor(private apiClient: ApiClient) {}

  // btnclick()
  // {
  //   this.apiClient.VisitReminder.getAllDetail().then((result) => {
  //     console.log('this.result--->', JSON.stringify(result)); 
  //   });
  // }
}

