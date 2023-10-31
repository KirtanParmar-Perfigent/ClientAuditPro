import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ILocationClient, LocationModel } from 'src/app/ClientApi';
import { ApiClient } from 'src/app/ApiClient';
import * as L from 'leaflet';
import jsPDF from "jspdf";
import "jspdf-autotable";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  location : LocationModel[] = [];

  locationDialog : boolean = false;
  
  mapDialog : boolean = false;

  locationform! : FormGroup;

  cols! : any[];

  exportColumns : any;

  selected! : ILocationClient;

  map : any;

  constructor(private fb : FormBuilder, private apiClient : ApiClient) {}

  ngOnInit(): void {
    debugger
    this.apiClient.Location.getAllDetail().then((result) => {
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

    this.cols = [
      { field: "id", header: "id" },
      { field: "userFullName", header: "UsersName" },
      { field: "customerFullName", header: "CustomersName" },
      { field: "longitude", header: "Longitude" },
      { field: "lattitude", header: "Lattitude" }
    ];

    this.exportColumns = this.cols.map(col => ({
      title: col.header,
      dataKey: col.field
    }));
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

  onClick(longitude: string, lattitude : string)
  {
      console.log("Lattitude",lattitude)
      console.log("Longitude",longitude)
  }

  initMap(longitude: number, latitude: number): void {
    this.mapDialog = true;

    if(this.map)
    {
      this.map.remove();
    }

    // Delay map initialization until the dialog is open
    setTimeout(() => {
      this.map = L.map('map', {
        center: [51.5, -0.09], // Use the provided latitude and longitude
        zoom: 3
      });

      const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 20,
        minZoom: 3,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      });

      L.marker([51.5, -0.09]).addTo(this.map)
      .bindPopup(`Lat : ${51.5} - Lon : ${-0.09}`)
      .openPopup();

      tiles.addTo(this.map);
    });
  }

  exportPdf() {
    const doc = new jsPDF('p', 'pt');
    (doc as any).autoTable(this.exportColumns, this.location);
    
    // const pdfData = doc.output('datauristring');
    
    // const newTab = window.open();
    // newTab?.document.open();
    // newTab?.document.write('<iframe width="100%" height="100%" src="' + pdfData + '"></iframe');
    // newTab?.document.close();

    const pdfData = doc.output('bloburl');
    const newTab = window.open(pdfData);
    newTab?.document.open();
    newTab?.document.write('<iframe width="100%" height="100%" src="' + pdfData + '"></iframe');
    newTab?.document.close();
  }
  
}
