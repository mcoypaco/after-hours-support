import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MdDialog } from '@angular/material';
import { Router } from '@angular/router';

import { Exception } from './exception';
import { ExceptionDialogComponent } from './exception-dialog/exception-dialog.component';

@Injectable()
export class ExceptionService implements Exception {
  buttonLabel: string = 'Got it!';
  message: string;
  statusText: string;

  constructor(private dialog: MdDialog, private router: Router) { }

  takeAction(error: HttpErrorResponse) : void {
    this.statusText = error.statusText;

    if(error.status === 401) this.unauthenticated(error);
    else if(error.status === 403) this.unauthorized(error);
    else this.internalServerError(error);
  }

  unauthenticated(error: HttpErrorResponse) {
    this.message = 'Please login to continue.';

    this.openDialog(this.redirectToLoginPage);
  }

  redirectToLoginPage(){
    this.router.navigate(['']);
  }

  unauthorized(error: HttpErrorResponse) {
    this.message = 'This action is unauthorized.';
    this.openDialog();
  }

  internalServerError(error: HttpErrorResponse) { 
    this.message = 'Oops! Something went wrong. Please try again or refresh the page.';
    this.openDialog();
  }

  openDialog(resolveError? : VoidFunction) {
    let dialogRef = this.dialog.open(ExceptionDialogComponent, {
      data: {
        statusText: this.statusText,
        message: this.message,
        buttonLabel: this.buttonLabel,
      }
    });

    if(resolveError) dialogRef.afterClosed().subscribe(() => resolveError());
  }
}
