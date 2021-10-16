import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPDQueueComponent } from './opd-queue.component';

describe('OPDQueueComponent', () => {
  let component: OPDQueueComponent;
  let fixture: ComponentFixture<OPDQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPDQueueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPDQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
