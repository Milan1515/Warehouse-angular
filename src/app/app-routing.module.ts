import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { DocumentDetailsComponent } from './core/document-details/document-details.component';
import { HomeComponent } from './core/home/home.component';
import { DocumentsComponent } from './documents/documents.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "documents", component: DocumentsComponent},
  { path: 'document/:documentId', component: DocumentDetailsComponent },
  {path: "", redirectTo: "/home", pathMatch: "prefix"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
