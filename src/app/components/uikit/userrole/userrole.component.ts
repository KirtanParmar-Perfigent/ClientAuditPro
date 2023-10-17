import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUserRoleClient, UserRoleDetailsModel } from 'src/app/ClientApi';
import { ApiClient } from 'src/app/ApiClient';

@Component({
  selector: 'app-userrole',
  templateUrl: './userrole.component.html',
  styleUrls: ['./userrole.component.scss']
})
export class UserroleComponent implements OnInit {

  userrole! : UserRoleDetailsModel[];

  userroleDialog : boolean = false;

  userroleform! : FormGroup;

  selected! : IUserRoleClient;

  constructor(private fb : FormBuilder, private apiClient : ApiClient) {}

  ngOnInit(): void {
      this.apiClient.UserRole.getAll().then((result) => {
        console.log("Data",result)
        this.userrole = result
      });

      this.apiClient.Role.getAll().then((result) =>{
        
      })
    // this.userroleform = this.fb.group({
    //   companyName : ['',Validators.required],
    //   email : ['',Validators.required],
    //   address : ['',Validators.required],
    //   contactNo : ['',Validators.required],
    //   country : ['',Validators.required]
    // })
  }

  openNew()
  {
    this.userroleDialog = true;
  }

  saveData()
  {
    console.log(this.userroleform.value);
    this.userroleDialog = false;
    this.userroleform.reset();
  }

  hideDialog()
  {
    this.userroleDialog = false;
    this.userroleform.reset();
  }
}
