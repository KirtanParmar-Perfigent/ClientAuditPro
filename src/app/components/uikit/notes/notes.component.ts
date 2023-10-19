import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { INotesClient, NotesModel } from 'src/app/ClientApi';
import { ApiClient } from 'src/app/ApiClient';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notes! : NotesModel[];

  notesDialog : boolean = false;

  notesform! : FormGroup;

  selected! : INotesClient;

  constructor(private fb : FormBuilder, private apiClient : ApiClient) {}

  ngOnInit(): void {
      this.apiClient.Notes.getAllDetail().then((result) => {
        console.log("Data",result)
        this.notes = result
      });

    this.notesform = this.fb.group({
      Description : ['',Validators.required],
      UserId : ['',Validators.required],
      CustomerId : ['',Validators.required],
    })
  }

  openNew()
  {
    this.notesDialog = true;
  }

  saveData()
  {
    console.log(this.notesform.value);
    this.notesDialog = false;
    this.notesform.reset();
  }

  hideDialog()
  {
    this.notesDialog = false;
    this.notesform.reset();
  }

}
