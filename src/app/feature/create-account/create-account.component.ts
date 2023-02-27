import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { CreateSignalService } from './create-signal.service';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent {
  constructor(public dialog: MatDialog) {}
  animal: string = '';
  name: string = '';
  openDialog(): void {
    const dialogRef = this.dialog.open(CreateAccountDialogComponent, {
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}

@Component({
  selector: 'dialog-overview-dialog',
  templateUrl: './create-account-dialog.html',
})
export class CreateAccountDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CreateAccountDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private createSignalSevice: CreateSignalService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onCreate() {
    this.createSignalSevice.SendCreateSignal();
  }
}
