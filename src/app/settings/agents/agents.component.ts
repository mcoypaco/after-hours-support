import { Component, OnInit } from '@angular/core';
import { Agent } from '../../models/agent';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})
export class AgentsComponent implements OnInit {
  agents : Agent[];

  constructor() { }

  ngOnInit() {
    this.agents = [
      new Agent('0123456789', 'John Doe'),
      new Agent('9876543210', 'Jane Doe'),
    ]
  }

}
