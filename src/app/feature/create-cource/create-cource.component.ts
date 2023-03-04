import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CreateCourceFormComponent } from '../create-cource-form/create-cource-form.component';
import { CreateCourseSignalService } from './create-signal.service';

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
  @ViewChild('child') childComponent!: CreateCourceFormComponent;
  constructor(
    public dialogRef: MatDialogRef<CreateCourceDialogComponent>,
    private createSignalService: CreateCourseSignalService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onCreate() {
    if (this.childComponent.myForm.valid) {
      this.createSignalService.SendCourseCreateSignal();
      this.onNoClick();
    } else {
      this.childComponent.myForm.control.markAllAsTouched();
    }
  }
}
