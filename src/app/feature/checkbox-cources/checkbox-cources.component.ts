import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { Course } from 'src/app/profile/interface/course';
import { SaveEventService } from '../reg-cource/save-event.service';
import { GetAllCoursesService } from '../services/get-all-courses.service';
import { RegisterCourseService } from '../services/register-course.service';

interface checkBoxCourse extends Course {
  checked?: boolean;
}

@Component({
  selector: 'app-checkbox-cources',
  templateUrl: './checkbox-cources.component.html',
  styleUrls: ['./checkbox-cources.component.scss'],
})
export class CheckboxCourcesComponent {
  courses: checkBoxCourse[] = [
    {
      course_id: '01',
      course_code: 'ict1407',
      course_title: 'test',
      course_description: 'test description',
    },
  ];

  tmp_selected: checkBoxCourse[] = [];

  already_selectedCourses: checkBoxCourse[] = [];
  removedSelectedCourses: checkBoxCourse[] = [];

  response: Observable<Object> = EMPTY;

  //@ts-ignore
  subscription1: Subscription;
  //@ts-ignore
  subscription2: Subscription;
  //@ts-ignore
  subscription3: Subscription;
  //@ts-ignore
  subscription4: Subscription;

  constructor(
    private saveEvent: SaveEventService,
    private fetchCourse: GetAllCoursesService,
    private registerCourse: RegisterCourseService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.subscription1 = this.saveEvent.selectCourseEvent.subscribe((data) => {
      this.findDifferenceNewSelected();
      this.findDifferenceRemove();
    });
    this.subscription2 = this.fetchCourse.getAllCourses().subscribe((data) => {
      this.courses = data.data;
      this.addFalse();
    });
    const username = localStorage.getItem('username');
    this.subscription3 = this.fetchCourse
      .getSelectedCourses(username!)
      .subscribe((data) => {
        this.already_selectedCourses = data.data;
        for (
          let course_index = 0;
          course_index < this.already_selectedCourses.length;
          course_index++
        ) {
          for (
            let course_index_ = 0;
            course_index_ < this.courses.length;
            course_index_++
          ) {
            if (
              this.already_selectedCourses[course_index].course_id ===
              this.courses[course_index_].course_id
            ) {
              this.courses[course_index_].checked = true;
            }
          }
        }
      });
  }

  ngOnDestroy() {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();
  }

  addFalse() {
    const withChecked = this.courses.map((course) => {
      return { ...course, checked: false };
    });
    this.courses = withChecked;
  }

  onChange(event: any, course_id: string) {
    if (event.checked === true) {
      for (let course of this.courses) {
        if (course.course_id === course_id) {
          this.tmp_selected.push(course);
        }
      }
      this.removedSelectedCourses = this.removedSelectedCourses.filter(
        (value) => {
          if (value.course_id == course_id) {
            return false;
          }
          return true;
        }
      );
    } else if (event.checked == false) {
      this.tmp_selected = this.tmp_selected.filter((value) => {
        if (value.course_id === course_id) {
          return false;
        }
        return true;
      });
      for (let course of this.courses) {
        if (course.course_id === course_id) {
          this.removedSelectedCourses.push(course);
        }
      }
    }
    console.log('tmp selected', this.tmp_selected);
    console.log('tmp removed', this.removedSelectedCourses);
  }

  findDifferenceNewSelected() {
    let difference = [];
    let available = false;
    for (let course of this.tmp_selected) {
      for (let already_course of this.already_selectedCourses) {
        if (course.course_id === already_course.course_id) {
          available = true;
        }
      }
      if (!available) {
        difference.push(parseInt(course.course_id));
      }
      available = false;
    }
    if (difference.length > 0) {
      let userId = localStorage.getItem('userId')!;
      this.response = this.registerCourse.sendNewSelectedCourse({
        user_id: userId,
        courses: difference,
      });
      this.handleResponse();
    }
    console.log('new selected ', difference);
  }

  findDifferenceRemove() {
    let difference = [];
    for (let i = 0; i < this.already_selectedCourses.length; i++) {
      for (let j = 0; j < this.removedSelectedCourses.length; j++) {
        if (
          this.already_selectedCourses[i].course_id ===
          this.removedSelectedCourses[j].course_id
        ) {
          difference.push(parseInt(this.already_selectedCourses[i].course_id));
        }
      }
    }
    let userId = localStorage.getItem('userId')!;
    this.response = this.registerCourse.sendRemovedCourse({
      user_id: userId,
      courses: difference,
    });
    this.handleResponse();
    console.log('removed', difference);
  }

  openSnackBar(msg: string, cls = 'cls') {
    this._snackBar.open(msg, 'Close', {
      duration: 4000,
      panelClass: [cls],
    });
  }

  handleResponse() {
    console.log('handle response');
    this.subscription4 = this.response.subscribe({
      next: (response: any) => {
        console.log('Response received:', response);
        if (response.success) {
          console.log('Success');
        }
      },
      error: (err) => {
        this.openSnackBar('Course Registration Error');
        this.subscription4.unsubscribe();
        console.error('Error occurred:', err);
      },
      complete: () => {
        this.openSnackBar('Course Registration Success');
        this.subscription4.unsubscribe();
      },
    });
  }
}
