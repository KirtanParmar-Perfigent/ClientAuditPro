import { Component, OnInit } from '@angular/core';
import { PdfService } from '../services/pdf.service';
import jsPDF from "jspdf";
import "jspdf-autotable";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit{

  pdfData! : SafeResourceUrl;

  exportColumns! : Object;

  constructor(private pdfservice : PdfService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.pdfData = this.pdfservice.pdfGetData();
    this.exportColumns = this.pdfservice.getExportColumns();

    // const iframe = document.createElement('iframe');
    // iframe.setAttribute('width', '100%');
    // iframe.setAttribute('height', '100%');
    // iframe.setAttribute('src', pdfData);

    // const container = document.getElementById('pdf-container');
    // if (container) {
    //   container.appendChild(iframe);
    // }
    this.generatePdf();
  }

  generatePdf()
  {
    const doc = new jsPDF('p', 'pt');
    (doc as any).autoTable(this.exportColumns, this.pdfData);
    
    const pdfData = this.sanitizer.bypassSecurityTrustResourceUrl(doc.output('datauristring'));
    this.pdfData = pdfData;
  }
}
