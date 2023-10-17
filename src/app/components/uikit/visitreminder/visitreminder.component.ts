import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IVisitReminderClient, VisitReminderDetailsModel } from 'src/app/ClientApi';
import { ApiClient } from 'src/app/ApiClient';

@Component({
  selector: 'app-visitreminder',
  templateUrl: './visitreminder.component.html',
  styleUrls: ['./visitreminder.component.scss']
})
export class VisitreminderComponent implements OnInit {

  visitreminder : VisitReminderDetailsModel[] = [];

  visitreminderDialog : boolean = false;

  visitreminderform! : FormGroup;

  selected! : IVisitReminderClient;

  constructor(private fb : FormBuilder, private apiClient : ApiClient) {}

  ngOnInit(): void {
    debugger
    this.apiClient.VisitReminder.getAll().then((result) => {
      console.log("Data",result)
      this.visitreminder = result
      });
      
    this.visitreminderform = this.fb.group({
      CustomerId : ['',Validators.required],
      UserId : ['',Validators.required],
      Reminder : ['',Validators.required],
    })
  }
  
  openNew()
  {
    this.visitreminderDialog = true;
  }

  saveData()
  {
    console.log(this.visitreminderform.value);
    this.visitreminderDialog = false;
    this.visitreminderform.reset();
  }

  hideDialog()
  {
    this.visitreminderDialog = false;
    this.visitreminderform.reset();
  }
}
