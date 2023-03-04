import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CreateAccountFormComponent } from '../create-account-form/create-account-form.component';
import { CreateSignalService } from './create-signal.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateAccountDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'dialog-overview-dialog',
  templateUrl: './create-account-dialog.html',
})
export class CreateAccountDialogComponent {
  @ViewChild('child') childComponent!: CreateAccountFormComponent;
  constructor(
    public dialogRef: MatDialogRef<CreateAccountDialogComponent>,
    private createSignalSevice: CreateSignalService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onCreate() {
    if (this.childComponent.myForm.valid) {
      this.createSignalSevice.SendCreateSignal();
      this.onNoClick();
    } else {
      this.childComponent.myForm.control.markAllAsTouched();
    }
  }
}
