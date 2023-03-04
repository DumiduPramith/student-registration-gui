import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../Models/course';

@Injectable({
  providedIn: 'root',
})
export class CreateCourseService {
  constructor(private http: HttpClient) {}

  sendCourse(data: Course) {
    let url = 'http://localhost:8080/api/create-course';
    const observable = this.http.post(url, JSON.stringify(data));

    return observable;
  }
}
