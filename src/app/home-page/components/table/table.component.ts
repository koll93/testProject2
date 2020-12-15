import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {DataTable} from '../../shared/interface';
import {MatTable} from '@angular/material';
import {MatDialog} from '@angular/material/dialog';
import {TableDialogComponent} from '../table-dialog/table-dialog.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  dataSource: DataTable[];
  @ViewChild('table', {static: false}) table: MatTable<any>; // ссылка на таблицу
  displayedColumns: string[] = ['name', 'age', 'nickname', 'isCheck', 'edit'];


  constructor(private actRouter: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.subscription = this.actRouter.data.subscribe(data => {
      this.dataSource = data.data;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  deleteRow(index: number) {
    if (confirm('Удалить строку?')) {
    this.dataSource.splice(index, 1);
    this.table.renderRows();
    }
  }

  addOrChangeRow(isNewRow: boolean, index?: number) {
    if (isNewRow) {
      const dialogRef = this.dialog.open(TableDialogComponent, {
        width: '300px',
        data: {name: '', age: 0, nickname: '', isCheck: false}
      });
      dialogRef.afterClosed().subscribe(result => {
        this.dataSource.push(result);
        this.table.renderRows();
      });
    } else {
      const row = this.dataSource[index];
      const dialogRef = this.dialog.open(TableDialogComponent, {
        width: '300px',
        data: {name: row.name, age: row.age, nickname: row.nickname, isCheck: row.isCheck}
      });
      dialogRef.afterClosed().subscribe(result => {
        this.dataSource[index] = result;
        this.table.renderRows();
      });
    }
  }

}
