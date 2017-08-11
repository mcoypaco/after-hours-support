import { Injectable } from '@angular/core';
import { MdSnackBar } from '@angular/material';

@Injectable()
export class PushNotificationService {

  constructor(private snackBar: MdSnackBar) { }

  simple(message: string): void {
    this.snackBar.open(message, 'Okay', {
      duration: 3000,
    });
  }
}
