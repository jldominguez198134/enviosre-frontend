import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userData: any;
  subUserData = new Subject();

  constructor(
    private http: HttpClient
  ) { }

  setUserData(data: any) {
    this.userData = data;
    this.subUserData.next(this.userData);
  }
  setUserAccount(account: number) {
    
    this.userData.cuentaBancaria = this.userData.cuentaBancaria = account;
    console.warn(account, this.userData);
  }

  getUserData() {
    return this.userData;
  }

  login(data: any) {
    return this.http.post('http://localhost/enviosre-backend/includes/login.inc.php', data);
  }

  sendBankAccount(data: any) {
    return this.http.post('http://localhost/enviosre-backend/includes/datosbancarios.inc.php', data);
  }
}