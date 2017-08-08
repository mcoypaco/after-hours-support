import { Component, OnInit } from '@angular/core';

import { WorkQueue } from '../../models/work-queue';

@Component({
  selector: 'app-work-queues',
  templateUrl: './work-queues.component.html',
  styleUrls: ['./work-queues.component.scss']
})
export class WorkQueuesComponent implements OnInit {
  workQueues: WorkQueue[];

  constructor() { }

  ngOnInit() {
    this.workQueues = [
      new WorkQueue('Voice'),
      new WorkQueue('Chat'),
    ]
  }

}
