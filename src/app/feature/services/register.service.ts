import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  // create new account
  constructor(private http: HttpClient) {}

  sendData(data: User) {
    let url = 'http://localhost:8080/api/register';
    const observable = this.http.post(url, JSON.stringify(data));

    return observable;
  }
}
