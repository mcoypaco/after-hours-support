import { Component, OnInit } from '@angular/core';

import { Team } from '../../models/team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  teams: Team[];

  constructor() { }

  ngOnInit() {
    this.teams = [
      new Team('Team Leader 1'),
      new Team('Team Leader 2'),
    ]
  }

}
