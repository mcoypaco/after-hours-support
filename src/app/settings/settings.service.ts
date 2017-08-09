import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material';

import { Settings } from './settings';

@Injectable()
export class SettingsService implements Settings {
  private perPage : number = 10;
  
  model: string;
  state: string;
  term: string;
  total: number;
  
  search() { }

  add()  { }

  paging(pageEvent: PageEvent){ }

  constructor() { }

}
