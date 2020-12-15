import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {RoutService} from '../../shared/services/rout.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html'
})
export class DialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogComponent>, private rout: RoutService) { }

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
