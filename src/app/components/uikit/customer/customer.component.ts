import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerModel, ICustomerClient } from 'src/app/ClientApi';
import { ApiClient } from 'src/app/ApiClient';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customer! : CustomerModel[];

  customerDialog : boolean = false;

  customerform! : FormGroup;

  selected! : ICustomerClient;

  constructor(private fb : FormBuilder, private apiClient : ApiClient) {}

  ngOnInit(): void {
      this.apiClient.Customer.getAllDetail().then((result) => {
        console.log(result)
        this.customer = result;
      });

    this.customerform = this.fb.group({
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
    this.customerDialog = true;
  }

  saveData()
  {
    console.log(this.customerform.value);
    this.customerDialog = false;
    this.customerform.reset();
  }

  hideDialog()
  {
    this.customerDialog = false;
    this.customerform.reset();
  }
}
