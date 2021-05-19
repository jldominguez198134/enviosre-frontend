import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http: HttpClient
  ) { }

  sendMenssage(data: any) {
    return this.http.post('http://localhost/enviosre-backend/includes/contactar.inc.php', data);
  }
}