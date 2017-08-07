import { Component, OnInit } from '@angular/core';

import { Questionnaire } from '../../models/questionnaire';

@Component({
  selector: 'app-questionnaire-list',
  templateUrl: './questionnaire-list.component.html',
  styleUrls: ['./questionnaire-list.component.scss']
})
export class QuestionnaireListComponent implements OnInit {
  questionnaires: Questionnaire[];

  constructor() { }

  ngOnInit() {
    this.questionnaires = [
      new Questionnaire(1, 'New Template')
    ]
  }
}
