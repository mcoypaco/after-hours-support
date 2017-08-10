import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import 'rxjs/add/operator/catch';

import { Agent } from '../../../models/Agent';
import { AgentsDataService } from '../agents-data.service';
import { CreateAgentDialogService } from './create-agent-dialog.service';
import { ExceptionService } from '../../../core/exception.service';

@Component({
  selector: 'app-create-agent-dialog',
  templateUrl: './create-agent-dialog.component.html',
  styleUrls: ['./create-agent-dialog.component.scss']
})
export class CreateAgentDialogComponent implements OnInit {
  busy: boolean;

  constructor(
    public dialogRef: MdDialogRef<CreateAgentDialogComponent>,
    public createAgentForm: CreateAgentDialogService,
    private agentsData: AgentsDataService,
    private exception: ExceptionService,
  ) { }

  ngOnInit() {
  }
  
  submit() {
    if(this.createAgentForm.formGroup.valid && !this.busy) {
      this.busy = true;

      let agent = new Agent(
        this.createAgentForm.formGroup.get('employeeNumber').value,
        this.createAgentForm.formGroup.get('name').value
      );

      this.agentsData.store(agent).subscribe(
        resp => console.log(resp),
        err => this.exception.takeAction(err),
        () => console.log('called')
      );
    }
    

    // this.createAgentForm.formGroup.reset()
    // this.dialogRef.close('hello world');
  }
}
