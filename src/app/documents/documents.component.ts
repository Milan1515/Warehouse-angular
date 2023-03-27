import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WHDocumentList } from '../model/wh-document-list.model';
import { WarehouseService } from '../service/warehouse.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
documents: WHDocumentList = new WHDocumentList();
params = {
  sort: "",
  sortDirection: "",
  page:1,
  pageSize: 10

}
settings = {
  dateOfCreation: true,
  dateOfRecording: true,
  status: true,
  transactionType: true,
  businessPartner: true,
  businessPartnerLocation: true,
  year: true,
}

showSettings = false;
  constructor(private service: WarehouseService, private route: Router) { }

  ngOnInit(): void {
    this.getWare()
  }
  getWare(): void {
  this.service.getWare(this.params).subscribe({
    next: (docuents: WHDocumentList) => {
      this.documents = docuents
    }
  })
  }
  changeSort(sort: string) {
    if (this.params.sort == sort) {
      this.params.sortDirection = this.params.sortDirection == 'asc' ? 'desc' : 'asc'
    } else {
      this.params.sort = sort;
      this.params.sortDirection = 'asc'
    }
    this.getWare();
  }
  onPageChange() {
    this.getWare();
  }
  openDocument(documentId: number) {
    this.route.navigate(['document', documentId])
  }
}
