import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageEvent } from '@angular/material';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs/Subscription';

import { Agent } from '../../models/agent';
import { AgentsDataService } from './agents-data.service';
import { Settings } from '../settings';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})
export class AgentsComponent implements OnInit, OnDestroy, Settings {
  model: string = 'Agent';
  perPage: number;
  state: string = 'Agents';
  term:string = '';
  total: number = 0;

  pageEventSubscription: Subscription;

  // agents : Observable<Agent[]>;
  agents : Agent[];

  constructor(private agentsData: AgentsDataService, private settings: SettingsService) { 
    // properties
    this.settings.total = this.total;
    this.settings.model = this.model;
    this.settings.state = this.state;
    this.settings.term = this.term;
    this.settings.add = this.add;

    this.pageEventSubscription = this.settings.getPageEvent().subscribe(pageEvent => {
      this.agentsData.paginate(pageEvent.pageIndex + 1).subscribe(data => {
        this.agents = data.data;
      });
    });
  }

  ngOnInit() {
    this.agentsData.paginate().subscribe(data => {
      this.settings.total = data.total;
      this.settings.perPage = data.per_page;
      this.agents = data.data;
    });
  }

  ngOnDestroy() {
    this.pageEventSubscription.unsubscribe();
  }

  add() {
    console.log('It works!');
  }
}
