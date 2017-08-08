import { Component, OnInit } from '@angular/core';

import { Campaign } from '../../models/campaign';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss']
})
export class CampaignsComponent implements OnInit {
  campaigns: Campaign[];

  constructor() { }

  ngOnInit() {
    this.campaigns = [
      new Campaign('VAR1'),
      new Campaign('VAR2'),
      new Campaign('VAR3'),
    ]
  }

}
