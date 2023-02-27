import { Component } from '@angular/core';
import { Role, roles } from '../Models/role';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  selectedValue = '';
  roles: Role[] = roles;
}
