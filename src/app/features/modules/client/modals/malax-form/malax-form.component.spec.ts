import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MalaxFormComponent } from './malax-form.component';

describe('MalaxFormComponent', () => {
  let component: MalaxFormComponent;
  let fixture: ComponentFixture<MalaxFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MalaxFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MalaxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
