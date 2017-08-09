import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material';
import { Observable } from 'rxjs';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class SettingsService {
  model: string;
  perPage : number;
  state: string;
  term: string;
  total: number;

  private pageEventSource = new Subject<any>();
  
  constructor() { }

  // Todo: Dialog form for creating agent
  add() { }


  sendPageEvent(pageEvent: PageEvent) {
    this.pageEventSource.next(pageEvent);
  }

  getPageEvent(): Observable<PageEvent> {
    return this.pageEventSource.asObservable();
  }

  // search() { }
}
