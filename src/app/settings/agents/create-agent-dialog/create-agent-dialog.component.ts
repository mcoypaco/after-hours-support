import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { Agent } from '../../../models/Agent';
import { AgentsDataService } from '../agents-data.service';
import { CreateAgentDialogService } from './create-agent-dialog.service';
import { ExceptionService } from '../../../core/exception.service';
import { PushNotificationService } from '../../../core/push-notification.service';
import { Paginated } from '../../../interfaces/paginated';

@Component({
  selector: 'app-create-agent-dialog',
  templateUrl: './create-agent-dialog.component.html',
  styleUrls: ['./create-agent-dialog.component.scss']
})
export class CreateAgentDialogComponent implements OnInit {
  busy: boolean;
  hasDuplicate: boolean;

  constructor(
    public dialogRef: MdDialogRef<CreateAgentDialogComponent>,
    public createAgentForm: CreateAgentDialogService,
    private agentsData: AgentsDataService,
    private exception: ExceptionService,
    private pushNotification: PushNotificationService,
  ) { }

  ngOnInit() {
    this.createAgentForm.formGroup.get('employeeNumber').valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .switchMap( employeeNumber =>  this.checkDuplicate(employeeNumber))
      .subscribe( 
        resp => this.hasDuplicate = resp.data.length ? true : false,
        err => this.exception.takeAction(err),
      );
  }

  checkDuplicate(employeeNumber : string) : Observable<Paginated> {
    let query = {
      index: 'employee_number',
      keyword: employeeNumber,
    }

    return this.agentsData.search(query);
  }

  submit() {
    if(this.createAgentForm.formGroup.valid && !this.busy && !this.hasDuplicate) {
      this.busy = true;

      let agent = new Agent(
        this.createAgentForm.formGroup.get('employeeNumber').value,
        this.createAgentForm.formGroup.get('name').value
      );

      this.agentsData.store(agent).subscribe(
        resp => {
          this.createAgentForm.formGroup.reset();
          this.dialogRef.close();
          this.pushNotification.simple('Agent has been created!');
          this.createAgentForm.transactionComplete();
        },
        err => this.exception.takeAction(err),
      );
    }
  }
}
