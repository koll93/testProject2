import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCheckboxModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule, MatGridListModule,
  MatIconModule, MatInputModule, MatTableModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {jqxTreeModule} from 'jqwidgets-ng/jqxtree';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTabsModule,
    MatExpansionModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatGridListModule,
    jqxTreeModule,
    MatTableModule,
    MatCheckboxModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatTabsModule,
    MatExpansionModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatGridListModule,
    jqxTreeModule,
    MatTableModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { }
