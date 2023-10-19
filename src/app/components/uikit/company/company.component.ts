import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyModel, ICompanyClient } from 'src/app/ClientApi';
import { ApiClient } from 'src/app/ApiClient';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
  providers: [MessageService]
})
export class CompanyComponent implements OnInit {

  company! : CompanyModel[];

  companyDialog : boolean = false;

  companyform! : FormGroup;

  selected! : ICompanyClient;

  constructor(private fb : FormBuilder, private apiClient : ApiClient) {}

  ngOnInit(): void {
      this.apiClient.Company.getAllDetail().then((result) => {
        console.log("Data",result)
        this.company = result
      });

    this.companyform = this.fb.group({
      companyName : ['',Validators.required],
      email : ['',Validators.required],
      address : ['',Validators.required],
      contactNo : ['',Validators.required],
      country : ['',Validators.required]
    })
  }

  openNew()
  {
    this.companyDialog = true;
  }

  saveData()
  {
    console.log(this.companyform.value);
    this.companyDialog = false;
    this.companyform.reset();
  }

  hideDialog()
  {
    this.companyDialog = false;
    this.companyform.reset();
  }
}
