import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Article } from '../model/article.model';
import { DocumentItem } from '../model/document-item.model';
import { WHDocumentList } from '../model/wh-document-list.model';
import { WHDocument } from '../model/wh-document.model';
const baseURL = "http://localhost:3000/api/documents"
@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  constructor(private http: HttpClient) { }

  getWare(params?: any): Observable<WHDocumentList> {
    let options = {}

    if (params) {
      options = {
        params: new HttpParams()
          .set('sort', params.sort || "")
          .set('sortDirection', params.sortDirection || "")
          .set("page", params.page || "")
          .set("pageSize", params.pageSize || "")
          
      }
    }
    return this.http.get(baseURL, options).pipe(map((data: any) => {
      return new WHDocumentList(data)
    }))
  }
  getOne(documentId: number): Observable<WHDocument> {
    return this.http.get(`${baseURL}/${documentId}`).pipe(map((data:any) => {
      return new WHDocument(data);
    }))
  }
  getItems(documentId: number): Observable<DocumentItem[]> {
    return this.http.get(`${baseURL}/${documentId}/items`).pipe(map((data:any) => {
      return data.results && data.results.map((x: any) => new DocumentItem(x)) || [];
    }))
  }
  recordDocument(document: WHDocument): Observable<WHDocument> {
    console.log(document);
    return this.http.put(`${baseURL}/${document._id}`, document).pipe(map(res => {
      return new WHDocument(res);
    }));
  }
  getArticles(): Observable<Article[]> {
    return this.http.get('http://localhost:3000/api/articles').pipe(map((data: any) => {
      return data.results && data.results.map((x: any) => new Article(x)) || []
    }))
  }
  postItem(documentId: number, item: DocumentItem): Observable<DocumentItem> {
    return this.http.post(`${baseURL}/${documentId}/items`, item).pipe(map((data:any) => {
      return new DocumentItem(data);
    }))
  }
}
 
