import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private http: HttpClient
  ) { }

  createAccount(data: any) {
    return this.http.post('http://localhost/enviosre-backend/includes/signup.inc.php', data);
  }
}

