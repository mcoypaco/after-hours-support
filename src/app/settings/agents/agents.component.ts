import { Component, OnInit, OnDestroy } from '@angular/core';
import { MdDialog, PageEvent } from '@angular/material';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs/Subscription';

import { Agent } from '../../models/agent';
import { AgentsDataService } from './agents-data.service';
import { CreateAgentDialogComponent } from './create-agent-dialog/create-agent-dialog.component';
import { Settings } from '../settings';
import { SettingsService } from '../settings.service';
import { ExceptionService } from '../../core/exception.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})
export class AgentsComponent implements OnInit, OnDestroy, Settings {
  agents : Agent[];
  createAgentDialogSubscription: Subscription;
  model: string = 'Agent';
  pageEventSubscription: Subscription;
  perPage: number;
  state: string = 'Agents';
  term: string;
  total: number;

  constructor(
    private agentsData: AgentsDataService,
    private settings: SettingsService,
    private exception: ExceptionService,
    public dialog: MdDialog,
  ) { 
      this.createAgentDialogSubscription = this.settings.openAddForm().subscribe(() => this.openCreateAgentDialog());
      this.pageEventSubscription = this.settings.getPageEvent().subscribe(pageEvent => this.fetchAgents(pageEvent));
      
      this.settings.model = this.model;
      this.settings.state = this.state;
  }

  ngOnInit() {
    this.agentsData.paginate().subscribe(
      data => {
        this.agents = data.data;
        this.settings.perPage = data.per_page;
        this.settings.total = data.total;
      },
      error => this.exception.takeAction(error)
    );
  }

  ngOnDestroy() {
    this.createAgentDialogSubscription.unsubscribe();
    this.pageEventSubscription.unsubscribe();
  }

  fetchAgents(pageEvent : PageEvent) {
    this.agentsData.paginate(pageEvent.pageIndex + 1).subscribe(data => this.agents = data.data);
  }

  openCreateAgentDialog() : void {
    let dialogRef = this.dialog.open(CreateAgentDialogComponent);
    dialogRef.afterClosed().subscribe(message =>  console.log(message));
  }
}
