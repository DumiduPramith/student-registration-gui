import { Component } from '@angular/core';
import { Role, roles } from '../Models/role';

@Component({
  selector: 'app-create-account-form',
  templateUrl: './create-account-form.component.html',
  styleUrls: ['./create-account-form.component.scss'],
})
export class CreateAccountFormComponent {
  selectedValue = '';
  roles: Role[] = roles;
}
