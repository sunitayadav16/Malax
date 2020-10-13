import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleServiceDetailsComponent } from './schedule-service-details.component';

describe('ScheduleServiceDetailsComponent', () => {
  let component: ScheduleServiceDetailsComponent;
  let fixture: ComponentFixture<ScheduleServiceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleServiceDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleServiceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
