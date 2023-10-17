import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cptoast',
  templateUrl: './cptoast.component.html',
  styleUrls: ['./cptoast.component.scss']
})
export class CptoastComponent{

constructor(private messageService: MessageService) {}

showSuccessToast(message: string) {
  this.messageService.add({ severity: 'success', summary: 'Success', detail: message });
}

showErrorToast(message: string)
{
  this.messageService.add({severity:'error', summary: 'Error Message', detail: message});
}

}
