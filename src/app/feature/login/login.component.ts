import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Role, roles } from '../Models/role';
import { LoginService } from '../services/login.service';
import { LoginEventService } from './login-event.service';

interface Response {
  data: string;
  success: boolean;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private loginService: LoginService,
    private router: Router,
    private loginEvent: LoginEventService
  ) {}
  role = '';
  username = '';
  password = '';
  roles: Role[] = roles;

  onClick() {
    const data = {
      role: this.role,
      username: this.username,
      password: this.password,
    };
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
        console.error('Error occurred:', err);
      },
      complete: () => {},
    });
  }
}
