import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseList } from '../interface/course';

@Injectable({
  providedIn: 'root',
})
export class GetCoursesService {
  constructor(private http: HttpClient) {}

  getData() {
    let url = 'http://localhost:8080/api/get/courses';
    return <Observable<CourseList>>this.http.get(url);
  }
}
