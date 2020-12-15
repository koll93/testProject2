import { Injectable } from '@angular/core';
import {DataTable} from '../interface';
import {data} from '../../../../assets/data';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor() {}


  getDataTable(): Promise<DataTable[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  }

}
