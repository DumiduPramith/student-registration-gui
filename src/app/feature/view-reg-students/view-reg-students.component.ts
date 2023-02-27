import { Component } from '@angular/core';
import { Student_data } from '../interfaces';
import { GetRegStudentsService } from '../services/get-reg-students.service';

@Component({
  selector: 'app-view-reg-students',
  templateUrl: './view-reg-students.component.html',
  styleUrls: ['./view-reg-students.component.scss'],
})
export class ViewRegStudentsComponent {
  constructor(private get_all_student: GetRegStudentsService) {}

  ngOnInit() {
    this.get_all_student.getData().subscribe((data) => {
      if (data) {
        this.student_list = data.data;
      }
    });
  }
  student_list: Student_data[] = [
    {
      student_id: '1',
      username: 'admin',
      email: 'kenaa@example.com',
    },
  ];

  displayedColumns: string[] = ['student_id', 'username', 'email'];
}
