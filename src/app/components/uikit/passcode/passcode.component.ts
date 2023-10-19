import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPasscodeClient, PasscodeModel } from 'src/app/ClientApi';
import { ApiClient } from 'src/app/ApiClient';

@Component({
  selector: 'app-passcode',
  templateUrl: './passcode.component.html',
  styleUrls: ['./passcode.component.scss']
})
export class PasscodeComponent implements OnInit {

  passcode! : PasscodeModel[];

  passcodeDialog : boolean = false;

  passcodeform! : FormGroup;

  selected! : IPasscodeClient;

  constructor(private fb : FormBuilder, private apiClient : ApiClient) {}

  ngOnInit(): void {
      this.apiClient.Passcode.getAllDetail().then((result) => {
        console.log("Data",result)
        this.passcode = result
      });

    this.passcodeform = this.fb.group({
      UserId : ['',Validators.required],
      Password : ['',Validators.required],
    })
  }

  openNew()
  {
    this.passcodeDialog = true;
  }

  saveData()
  {
    console.log(this.passcodeform.value);
    this.passcodeDialog = false;
    this.passcodeform.reset();
  }

  hideDialog()
  {
    this.passcodeDialog = false;
    this.passcodeform.reset();
  }
}
