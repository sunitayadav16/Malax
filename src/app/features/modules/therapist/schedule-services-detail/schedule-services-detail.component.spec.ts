import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleServicesDetailComponent } from './schedule-services-detail.component';

describe('ScheduleServicesDetailComponent', () => {
  let component: ScheduleServicesDetailComponent;
  let fixture: ComponentFixture<ScheduleServicesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleServicesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleServicesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
