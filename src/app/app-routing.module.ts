import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ErrorPageComponent} from './error-page/error-page.component';
import {TableResolver} from './home-page/shared/table.resolver';

import {HomeComponent} from './home-page/home/home.component';
import {WorkplaceComponent} from './home-page/components/workplace/workplace.component';
import {AuthGuard} from './home-page/shared/auth.guard';
import {TableComponent} from './home-page/components/table/table.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, children: [
      {path: 'workplace', component: WorkplaceComponent, canActivate: [AuthGuard], children: [
          {path: 'table', component: TableComponent, resolve: {data: TableResolver}}
        ]}
    ]},
  {path: 'error', component: ErrorPageComponent},
  {path: '**', redirectTo: '/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
