import { Component } from '@angular/core';
import { Course } from '../interface/course';
import { GetCoursesService } from '../services/get-courses.service';

@Component({
  selector: 'app-cource-lst',
  templateUrl: './cource-lst.component.html',
  styleUrls: ['./cource-lst.component.scss'],
})
export class CourceLstComponent {
  constructor(private courseService: GetCoursesService) {}
  courses: Course[] = [
    {
      course_id: '01',
      course_code: 'ict1407',
      course_title: 'test',
      course_description: 'test description',
    },
  ];
  ngOnInit() {
    this.courseService.getData().subscribe((data) => {
      this.courses = data.data;
      console.log(this.courses);
    });
  }
}
