import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {RestService} from './services/rest.service';


@Injectable({
  providedIn: 'root'
})
export class TableResolver implements Resolve<any> {

  constructor(public rest: RestService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.rest.getDataTable();
  }
}
