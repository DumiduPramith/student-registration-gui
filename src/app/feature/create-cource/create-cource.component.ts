import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { CreateCourseSignalService } from './create-signal.service';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-create-cource',
  templateUrl: './create-cource.component.html',
  styleUrls: ['./create-cource.component.scss'],
})
export class CreateCourceComponent {
  constructor(public dialog: MatDialog) {}
  animal: string = '';
  name: string = '';
  openDialog(): void {
    const dialogRef = this.dialog.open(CreateCourceDialogComponent, {
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
  templateUrl: './create-cource-dialog.html',
})
export class CreateCourceDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CreateCourceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private createSignalService: CreateCourseSignalService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onCreate() {
    this.createSignalService.SendCourseCreateSignal();
    this.onNoClick();
  }
}
