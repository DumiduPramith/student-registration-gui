import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../Models/login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  sendLogin(data: Login) {
    let url = 'http://localhost:8080/api/login';
    const observable = this.http.post(url, JSON.stringify(data));

    return observable;
  }
}
