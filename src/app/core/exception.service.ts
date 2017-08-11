import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';
import { Exception } from './exception';
import { ExceptionDialogComponent } from './exception-dialog/exception-dialog.component';

@Injectable()
export class ExceptionService implements Exception {
  buttonLabel: string = 'Got it!';
  message: string;
  statusText: string;

  constructor(private dialog: MdDialog, private router: Router, private auth: AuthService) { }

  takeAction(error: HttpErrorResponse) : void {
    this.statusText = error.statusText;
    if(error.status === 401) this.unauthenticated(error);
    else if(error.status === 403) this.unauthorized(error);
    else if(error.status === 422) this.unprocessable(error);
    else if(error.status === 500) this.internalServerError(error);
  }

  redirectToLoginPage(){
    this.auth.redirectUrl = this.router.url;
    this.router.navigate(['/login']); 
  }

  unauthenticated(error: HttpErrorResponse) {
    this.message = 'Please login to continue.';
    this.openDialog().afterClosed().subscribe(result => this.redirectToLoginPage());
  }

  unauthorized(error: HttpErrorResponse) {
    this.message = 'This action is unauthorized.';
    this.openDialog();
  }

  unprocessable(error: HttpErrorResponse) {
    this.message = 'Please check the form for errors.';
    this.openDialog();
  }

  internalServerError(error: HttpErrorResponse) { 
    this.message = 'Oops! Something went wrong. Please try again or refresh the page.';
    this.openDialog();
  }

  openDialog() : MdDialogRef<ExceptionDialogComponent> {
    return this.dialog.open(ExceptionDialogComponent, {
      data: {
        statusText: this.statusText,
        message: this.message,
        buttonLabel: this.buttonLabel,
      }
    });
  }
}
