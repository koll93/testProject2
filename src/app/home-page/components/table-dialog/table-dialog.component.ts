import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DataTable} from '../../shared/interface';

@Component({
  selector: 'app-table-dialog',
  templateUrl: './table-dialog.component.html'
})
export class TableDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TableDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DataTable) { }

  ngOnInit() {
    console.log('data', this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
