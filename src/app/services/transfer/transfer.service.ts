import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(
    private http: HttpClient
  ) { }

  createAccount(data: any) {
    return this.http.post('http://localhost/enviosre-backend/includes/hacerTransferencia.inc.php', data);
  }
}

