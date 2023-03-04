import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Role, roles } from '../Models/role';
import { LoginService } from '../services/login.service';
import { LoginEventService } from './login-event.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @ViewChild('myForm', { static: false }) myForm!: NgForm;
  constructor(
    private loginService: LoginService,
    private router: Router,
    private loginEvent: LoginEventService,
    private _snackBar: MatSnackBar
  ) {}
  role = '';
  username = '';
  password = '';
  roles: Role[] = roles;

  openSnackBar(msg: string, cls = 'cls') {
    this._snackBar.open(msg, 'Close', {
      duration: 4000,
      panelClass: [cls],
    });
  }

  onClick() {
    const data = {
      role: this.role,
      username: this.username,
      password: this.password,
    };
    if (this.myForm.valid) {
      const observable = this.loginService.sendLogin(data);
      observable.subscribe({
        next: (response: any) => {
          console.log('Response received:', response);
          if (response.success) {
            let jsonData = JSON.parse(response.data);
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('role', this.role);
            localStorage.setItem('username', this.username);
            localStorage.setItem('userId', jsonData.userId);
            this.loginEvent.sendLoginEvent();
            this.router.navigate(['profile']);
          }
        },
        error: (err) => {
          this.openSnackBar('Invalid username or password');
          console.error('Error occurred:', err);
        },
        complete: () => {},
      });
    } else {
      this.myForm.control.markAllAsTouched();
    }
  }
}
