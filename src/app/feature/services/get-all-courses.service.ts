import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseList } from 'src/app/profile/interface/course';

@Injectable({
  providedIn: 'root',
})
export class GetAllCoursesService {
  constructor(private http: HttpClient) {}

  getAllCourses() {
    let url = 'http://localhost:8080/api/get/courses';
    return <Observable<CourseList>>this.http.get(url);
  }

  getSelectedCourses(username: string) {
    let url = 'http://localhost:8080/api/get/selected-courses';
    const params = new HttpParams().set('username', username);
    return <Observable<CourseList>>this.http.get(url, { params });
  }
}
