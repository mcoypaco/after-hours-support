import { Component, OnInit } from '@angular/core';

import { SettingsService } from './settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  constructor(private settings: SettingsService) { }

  ngOnInit() {
  }
}
