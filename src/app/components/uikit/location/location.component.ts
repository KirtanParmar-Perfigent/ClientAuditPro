import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ILocationClient, LocationDetailsModel } from 'src/app/ClientApi';
import { ApiClient } from 'src/app/ApiClient';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  location : LocationDetailsModel[] = [];

  locationDialog : boolean = false;

  locationform! : FormGroup;

  selected! : ILocationClient;

  constructor(private fb : FormBuilder, private apiClient : ApiClient) {}

  ngOnInit(): void {
    debugger
    this.apiClient.Location.getAll().then((result) => {
      console.log("Data",result)
      this.location = result
      });
      
    this.locationform = this.fb.group({
      companyName : ['',Validators.required],
      email : ['',Validators.required],
      address : ['',Validators.required],
      contactNo : ['',Validators.required],
      country : ['',Validators.required]
    })
  }
  
  openNew()
  {
    this.locationDialog = true;
  }

  saveData()
  {
    console.log(this.locationform.value);
    this.locationDialog = false;
    this.locationform.reset();
  }

  hideDialog()
  {
    this.locationDialog = false;
    this.locationform.reset();
  }
}
