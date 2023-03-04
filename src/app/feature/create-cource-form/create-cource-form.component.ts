import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateCourseSignalService } from '../create-cource/create-signal.service';
import { CreateCourseService } from '../services/create-course.service';

@Component({
  selector: 'app-create-cource-form',
  templateUrl: './create-cource-form.component.html',
  styleUrls: ['./create-cource-form.component.scss'],
})
export class CreateCourceFormComponent {
  constructor(
    private createSignalService: CreateCourseSignalService,
    private createCourseService: CreateCourseService,
    private _snackBar: MatSnackBar
  ) {}
  course_code = '';
  title = '';
  description = '';

  //@ts-ignore
  subscription1: Subscription;
  //@ts-ignore
  subscription2: Subscription;
  ngOnInit() {
    this.subscription2 = this.createSignalService.courseCreateEvent.subscribe(
      (data) => {
        this.submitCourseData();
      }
    );
  }

  ngOnDestroy() {
    this.subscription2.unsubscribe();
  }

  openSnackBar(msg: string, cls = 'cls') {
    this._snackBar.open(msg, 'Close', {
      duration: 4000,
      panelClass: [cls],
    });
  }

  submitCourseData() {
    const data = {
      course_code: this.course_code,
      course_name: this.title,
      course_description: this.description,
    };

    const sub = this.createCourseService.sendCourse(data);
    this.subscription1 = sub.subscribe({
      next: (response) => {
        console.log('Response received:', response);
      },
      error: (err) => {
        this.openSnackBar('Error Occured');
        this.subscription1.unsubscribe();
        console.error('Error occurred:', err);
      },
      complete: () => {
        this.openSnackBar('Course Created Successfully');
        this.subscription1.unsubscribe();
      },
    });
  }
}
