import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiClient } from 'src/app/ApiClient';
import { CategoryDetailsModel, ICategoryClient } from 'src/app/ClientApi';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  category : CategoryDetailsModel[] = [];

  categoryDialog : boolean = false;

  categoryform! : FormGroup;

  selected! : ICategoryClient;

  constructor(private fb : FormBuilder, private apiClient : ApiClient) {}

  ngOnInit(): void {
      this.apiClient.Category.getAll().then((result) => {
        console.log("Data",result)
        this.category = result
      });

    this.categoryform = this.fb.group({
      CategoryName : ['',Validators.required],
    })
  }

  openNew()
  {
    this.categoryDialog = true;
  }

  saveData()
  {
    console.log(this.categoryform.value);
    this.categoryDialog = false;
    this.categoryform.reset();
  }

  hideDialog()
  {
    this.categoryDialog = false;
    this.categoryform.reset();
  }
}
