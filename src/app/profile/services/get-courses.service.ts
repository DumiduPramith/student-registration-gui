import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseList } from '../interface/course';

@Injectable({
  providedIn: 'root',
})
export class GetCoursesService {
  constructor(private http: HttpClient) {}

  getData(username: string) {
    let url = 'http://localhost:8080/api/get/selected-courses';
    const params = new HttpParams().set('username', username);
    return <Observable<CourseList>>this.http.get(url, { params });
  }
}
