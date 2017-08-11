import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MdDialog, PageEvent } from '@angular/material';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { Agent } from '../../models/agent';
import { AgentsDataService } from './agents-data.service';
import { CreateAgentDialogComponent } from './create-agent-dialog/create-agent-dialog.component';
import { CreateAgentDialogService } from './create-agent-dialog/create-agent-dialog.service';
import { Settings } from '../settings';
import { SettingsService } from '../settings.service';
import { ExceptionService } from '../../core/exception.service';
import { PushNotificationService } from '../../core/push-notification.service';
import { Paginated } from '../../interfaces/paginated';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})
export class AgentsComponent implements OnInit, OnDestroy, Settings {
  agents : Agent[];
  model: string = 'Agent';
  state: string = 'Agents';
  perPage: number;
  total: number;
  createDialogSubscription: Subscription;
  pageEventSubscription: Subscription;
  transactionSubscription : Subscription;

  constructor(
    private agentsData: AgentsDataService,
    private createAgentDialog: CreateAgentDialogService,
    private settings: SettingsService,
    private exception: ExceptionService,
    private pushNotification: PushNotificationService,
    public dialog: MdDialog,
  ) { 
      this.settings.model = this.model;
      this.settings.state = this.state;

      this.settings.searchField  = new FormControl();
      this.settings.searchField.valueChanges
        .debounceTime(400)
        .distinctUntilChanged()
        .switchMap(term => this.searchUserInput(term))
        .subscribe(resp => this.agents = resp.data);

      this.createDialogSubscription = this.settings.openAddForm().subscribe(() => this.openCreateAgentDialog());
      this.pageEventSubscription = this.settings.getPageEvent().subscribe(pageEvent => this.fetchOnPageEvent(pageEvent));
      this.transactionSubscription = this.createAgentDialog.pendingTransaction().subscribe(() => this.initData());
  }

  ngOnInit() {
    this.initData();

  }

  ngOnDestroy() {
    this.createDialogSubscription.unsubscribe();
    this.pageEventSubscription.unsubscribe();
    this.transactionSubscription.unsubscribe();
  }

  fetchOnPageEvent(pageEvent : PageEvent) {
    this.agentsData.paginate(pageEvent.pageIndex + 1).subscribe(
      data => this.agents = data.data,
      err  => this.exception.takeAction(err),
    );
  }

  initData() : void {
    this.agentsData.paginate().subscribe(
      data => {
        this.agents = data.data;
        this.settings.perPage = data.per_page;
        this.settings.total = data.total;
      },
      error => this.exception.takeAction(error)
    );
  }

  openCreateAgentDialog() : void {
    this.dialog.open(CreateAgentDialogComponent);
  }

  searchUserInput(term : string): Observable<Paginated> {
    let query = { keyword: term }

    return this.agentsData.search(query)
  }
}
