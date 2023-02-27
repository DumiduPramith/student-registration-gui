import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student_list } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class GetRegStudentsService {
  constructor(private http: HttpClient) {}

  getData() {
    let url = 'http://localhost:8080/api/get/reg-students';
    return <Observable<Student_list>>this.http.get(url);
  }
}
