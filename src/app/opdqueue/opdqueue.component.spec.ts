import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdqueueComponent } from './opdqueue.component';

describe('OpdqueueComponent', () => {
  let component: OpdqueueComponent;
  let fixture: ComponentFixture<OpdqueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpdqueueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpdqueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
