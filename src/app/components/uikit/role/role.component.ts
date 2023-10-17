import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IRoleClient, RoleDetailsModel } from 'src/app/ClientApi';
import { ApiClient } from 'src/app/ApiClient';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {

  role! : RoleDetailsModel[];

  roleDialog : boolean = false;

  roleform! : FormGroup;

  selected! : IRoleClient;

  constructor(private fb : FormBuilder, private apiClient : ApiClient) {}

  ngOnInit(): void {
      this.apiClient.Role.getAll().then((result) => {
        console.log("Data",result)
        this.role = result
      });

    this.roleform = this.fb.group({
      Type : ['',Validators.required],
    })
  }

  openNew()
  {
    this.roleDialog = true;
  }

  saveData()
  {
    console.log(this.roleform.value);
    this.roleDialog = false;
    this.roleform.reset();
  }

  hideDialog()
  {
    this.roleDialog = false;
    this.roleform.reset();
  }
}