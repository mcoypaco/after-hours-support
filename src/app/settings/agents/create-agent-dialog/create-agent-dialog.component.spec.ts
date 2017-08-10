import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAgentDialogComponent } from './create-agent-dialog.component';

describe('CreateAgentDialogComponent', () => {
  let component: CreateAgentDialogComponent;
  let fixture: ComponentFixture<CreateAgentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAgentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAgentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
