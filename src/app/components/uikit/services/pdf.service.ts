import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() { }

  pdfData! : Array<object>;
  columns! : Object

  psdSetData(data : Array<object>, exportColumns : Object)
  {
    this.pdfData = data;
    this.columns = exportColumns;
  }

  pdfGetData()
  {
    return this.pdfData;
  }

  getExportColumns()
  {
    return this.columns;
  }
}
