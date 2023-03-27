import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './core/home/home.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { AboutComponent } from './core/about/about.component';
import { DocumentsComponent } from './documents/documents.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DocumentDetailsComponent } from './core/document-details/document-details.component';
import { PanelComponent } from './core/document-details/panel/panel.component';
import { ItemListComponent } from './core/document-details/item-list/item-list.component';
import { ItemFormComponent } from './core/document-details/item-form/item-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    DocumentsComponent,
    DocumentDetailsComponent,
    PanelComponent,
    ItemListComponent,
    ItemFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
