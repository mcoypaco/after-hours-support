import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material';
import { Observable } from 'rxjs';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class SettingsService {
  model: string;
  perPage : number;
  state: string;
  searchField: FormControl;
  total: number;

  private addFormSource = new Subject<any>();
  private pageEventSource = new Subject<any>();

  addForm() : void { 
    this.addFormSource.next();
  }

  openAddForm() : Observable<void> {
    return this.addFormSource.asObservable();
  }

  sendPageEvent(pageEvent: PageEvent) : void {
    this.pageEventSource.next(pageEvent);
  }

  getPageEvent(): Observable<PageEvent> {
    return this.pageEventSource.asObservable();
  }

  // search() { }
}
