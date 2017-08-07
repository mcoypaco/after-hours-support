import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkQueuesComponent } from './work-queues.component';

describe('WorkQueuesComponent', () => {
  let component: WorkQueuesComponent;
  let fixture: ComponentFixture<WorkQueuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkQueuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkQueuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
