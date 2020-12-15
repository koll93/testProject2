import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './home-page/home/home.component';
import { WorkplaceComponent } from './home-page/components/workplace/workplace.component';
import { DialogComponent } from './home-page/components/dialog/dialog.component';
import { TreeComponent } from './home-page/components/tree/tree.component';
import { TableComponent } from './home-page/components/table/table.component';
import { TableDialogComponent } from './home-page/components/table-dialog/table-dialog.component';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './error-page/error-page.component';

import { AppRoutingModule } from './app-routing.module';
import {MaterialModule} from './home-page/shared/material.module';


@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    HomeComponent,
    WorkplaceComponent,
    DialogComponent,
    TreeComponent,
    TableComponent,
    TableDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  bootstrap: [AppComponent],
  entryComponents : [DialogComponent, TableDialogComponent]
})
export class AppModule { }
