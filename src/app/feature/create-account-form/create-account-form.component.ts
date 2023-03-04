import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { CreateSignalService } from '../create-account/create-signal.service';
import { Role, roles } from '../Models/role';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-create-account-form',
  templateUrl: './create-account-form.component.html',
  styleUrls: ['./create-account-form.component.scss'],
})
export class CreateAccountFormComponent {
  @ViewChild('myForm', { static: false }) myForm!: NgForm;
  selectedValue = '';
  username = '';
  password = '';
  email = '';

  roles: Role[] = roles;
  //@ts-ignore
  subscription1: Subscription;
  //@ts-ignore
  subscription2: Subscription;
  constructor(
    private createSignalService: CreateSignalService,
    private registerService: RegisterService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.subscription1 = this.createSignalService.strategySelectEvent.subscribe(
      (data) => {
        this.submitFormData();
      }
    );
    console.log('initilize form');
  }

  ngOnDestroy() {
    this.subscription1.unsubscribe();
  }

  openSnackBar(msg: string, cls = 'cls') {
    this._snackBar.open(msg, 'Close', {
      duration: 4000,
      panelClass: [cls],
    });
  }

  submitFormData() {
    const data = {
      role: this.selectedValue,
      username: this.username,
      email: this.email,
      password: this.password,
    };
    const sub = this.registerService.sendData(data);

    this.subscription2 = sub.subscribe({
      next: (response) => {
        console.log('Response received:', response);
      },
      error: (err) => {
        this.subscription2.unsubscribe();
        if (err.status === 409) {
          this.openSnackBar('Account Already exist', 'text-danger');
        } else {
          this.openSnackBar('Error Occured', 'text-danger');
        }
        console.error('Error occurred:', err);
      },
      complete: () => {
        this.subscription2.unsubscribe();
        this.openSnackBar('Accout Created Successfully');
        console.log('completed');
      },
    });
  }
}
