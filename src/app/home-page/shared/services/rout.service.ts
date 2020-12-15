import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutService {

  constructor(private auth: AuthService, private router: Router) {}

  login(login, password) {
    this.auth.login();
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['./home/workplace']);
    } else {
      this.router.navigate(['/home']);
    }
  }

  viewTable(idTask: string) {
    if (idTask === '112') {
      this.router.navigate(['./home/workplace/table']);
    } else {
      this.router.navigate(['./home/workplace']);
    }
  }

}

