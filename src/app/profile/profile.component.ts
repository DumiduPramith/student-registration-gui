import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  name = localStorage.getItem('username');
  show_reg_students = false;
  role = 0;
  onClick() {
    this.show_reg_students = !this.show_reg_students;
  }
  ngOnInit() {
    if (localStorage.getItem('role')) {
      this.role = parseInt(localStorage.getItem('role') || '', 10);
    }
  }
}
