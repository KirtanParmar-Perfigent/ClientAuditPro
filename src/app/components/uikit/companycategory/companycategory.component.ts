import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiClient } from 'src/app/ApiClient';
import { CompanyCategoryDetailsModel, ICompanyCategoryClient } from 'src/app/ClientApi';

@Component({
  selector: 'app-companycategory',
  templateUrl: './companycategory.component.html',
  styleUrls: ['./companycategory.component.scss']
})
export class CompanycategoryComponent implements OnInit {

  companycategory : CompanyCategoryDetailsModel[] = [];

  companycategoryDialog : boolean = false;

  companycategoryform! : FormGroup;

  selected! : ICompanyCategoryClient;

  constructor(private fb : FormBuilder, private apiClient : ApiClient) {}

  ngOnInit(): void {
    debugger
    this.apiClient.CompanyCategory.getAll().then((result) => {
      console.log("Data",result)
      this.companycategory = result
      });
      
    this.companycategoryform = this.fb.group({
      companyName : ['',Validators.required],
      email : ['',Validators.required],
      address : ['',Validators.required],
      contactNo : ['',Validators.required],
      country : ['',Validators.required]
    })
  }
  
  openNew()
  {
    this.companycategoryDialog = true;
  }

  saveData()
  {
    console.log(this.companycategoryform.value);
    this.companycategoryDialog = false;
    this.companycategoryform.reset();
  }

  hideDialog()
  {
    this.companycategoryDialog = false;
    this.companycategoryform.reset();
  }
}