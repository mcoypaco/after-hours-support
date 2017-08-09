import { Component } from '@angular/core';
import { PageEvent } from '@angular/material';
import { SettingsService } from './settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  constructor(private settings: SettingsService) { }

  sendPageEvent(pageEvent: PageEvent) : void {
    this.settings.sendPageEvent(pageEvent);
  }
}
