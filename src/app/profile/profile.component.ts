import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  name = 'john';
  show_reg_students = false;

  onClick() {
    this.show_reg_students = !this.show_reg_students;
  }
}
