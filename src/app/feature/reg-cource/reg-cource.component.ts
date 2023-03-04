import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SaveEventService } from './save-event.service';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-reg-cource',
  templateUrl: './reg-cource.component.html',
  styleUrls: ['./reg-cource.component.scss'],
})
export class RegCourceComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog);

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'dialog-overview-dialog',
  templateUrl: './dialog-overview-dialog.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    private saveEvent: SaveEventService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave() {
    this.saveEvent.sendSaveEvent();
    this.onNoClick();
  }
}
