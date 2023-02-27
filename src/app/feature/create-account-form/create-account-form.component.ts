import { Component } from '@angular/core';
import { CreateSignalService } from '../create-account/create-signal.service';
import { Role, roles } from '../Models/role';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-create-account-form',
  templateUrl: './create-account-form.component.html',
  styleUrls: ['./create-account-form.component.scss'],
})
export class CreateAccountFormComponent {
  selectedValue = '';
  username = '';
  password = '';
  email = '';

  roles: Role[] = roles;
  constructor(
    private createSignalService: CreateSignalService,
    private registerService: RegisterService
  ) {}

  ngOnInit() {
    this.createSignalService.strategySelectEvent.subscribe((data) => {
      this.submitFormData();
    });
  }

  submitFormData() {
    const data = {
      role: this.selectedValue,
      username: this.username,
      email: this.email,
      password: this.password,
    };
    this.registerService.sendData(data);
  }
}
