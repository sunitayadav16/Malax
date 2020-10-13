import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapistAgreementFormComponent } from './therapist-agreement-form.component';

describe('TherapistAgreementFormComponent', () => {
  let component: TherapistAgreementFormComponent;
  let fixture: ComponentFixture<TherapistAgreementFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TherapistAgreementFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapistAgreementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
