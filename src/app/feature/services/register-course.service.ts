import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterCourse } from '../Models/registerCourse';

@Injectable({
  providedIn: 'root',
})
export class RegisterCourseService {
  constructor(private http: HttpClient) {}

  sendNewSelectedCourse(data: RegisterCourse) {
    let url = 'http://localhost:8080/api/register-course';
    const observable = this.http.post(url, JSON.stringify(data));
    return observable;
  }

  sendRemovedCourse(data: RegisterCourse) {
    let url = 'http://localhost:8080/api/remove-register-course';
    const observable = this.http.post(url, JSON.stringify(data));
    return observable;
  }
}
