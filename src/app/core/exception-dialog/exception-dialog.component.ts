import { Component, Inject } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-exception-dialog',
  templateUrl: './exception-dialog.component.html',
  styleUrls: ['./exception-dialog.component.scss']
})
export class ExceptionDialogComponent {

  constructor(@Inject(MD_DIALOG_DATA) public data: any, public dialogRef: MdDialogRef<ExceptionDialogComponent>) { }

  close() {
    this.dialogRef.close();
  }
}
