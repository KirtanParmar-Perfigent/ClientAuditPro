import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUsersClient, UsersModel } from 'src/app/ClientApi';
import { ApiClient } from 'src/app/ApiClient';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users! : UsersModel[];

  usersDialog : boolean = false;

  usersform! : FormGroup;

  selected! : IUsersClient;

  constructor(private fb : FormBuilder, private apiClient : ApiClient) {}

  ngOnInit(): void {
      this.apiClient.Users.getAllDetail().then((result) => {
        console.log("Data",result)
        this.users = result
      });

    this.usersform = this.fb.group({
      FirstName : ['',Validators.required],
      LastName : ['',Validators.required],
      UserName : ['',Validators.required],
      contactNo : ['',Validators.required],
      Email : ['',Validators.required],
      DOB : ['',Validators.required],
      Address : ['',Validators.required],
      Gender : ['',Validators.required]
    })
  }

  openNew()
  {
    this.usersDialog = true;
  }

  saveData()
  {
    console.log(this.usersform.value);
    this.usersDialog = false;
    this.usersform.reset();
  }

  hideDialog()
  {
    this.usersDialog = false;
    this.usersform.reset();
  }
}