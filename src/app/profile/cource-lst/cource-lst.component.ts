import { Component } from '@angular/core';
import { SaveEventService } from 'src/app/feature/reg-cource/save-event.service';
import { Course } from '../interface/course';
import { GetCoursesService } from '../services/get-courses.service';

@Component({
  selector: 'app-cource-lst',
  templateUrl: './cource-lst.component.html',
  styleUrls: ['./cource-lst.component.scss'],
})
export class CourceLstComponent {
  constructor(
    private courseService: GetCoursesService,
    private saveEvent: SaveEventService
  ) {
    this.saveEvent.selectCourseEvent.subscribe((data) => {
      console.log('ran 1');
      this.ngOnInit();
    });
  }
  courses: Course[] = [
    {
      course_id: '01',
      course_code: 'ict1407',
      course_title: 'test',
      course_description: 'test description',
    },
  ];
  ngOnInit() {
    setTimeout(() => {
      const username = localStorage.getItem('username');
      this.courseService.getData(username!).subscribe((data) => {
        this.courses = data.data;
        console.log(this.courses);
      });
    }, 1000);
  }
}
