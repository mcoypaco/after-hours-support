import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material';
import { Observable } from 'rxjs';
import { Subject }    from 'rxjs/Subject';

import { Settings } from './settings';

@Injectable()
export class SettingsService implements Settings {
  model: string;
  perPage : number;
  state: string;
  term: string;
  total: number;
  
  constructor() { }
  
  add() { }

  private pageEventSource = new Subject<any>();

  sendPageEvent(pageEvent: PageEvent) {
    this.pageEventSource.next(pageEvent);
  }

  getPageEvent(): Observable<PageEvent> {
    return this.pageEventSource.asObservable();
  }

  // search() { }

  // add()  { }

  // paging(pageEvent: PageEvent){
    
  // }


}
