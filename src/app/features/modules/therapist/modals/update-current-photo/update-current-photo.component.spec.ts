import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCurrentPhotoComponent } from './update-current-photo.component';

describe('UpdateCurrentPhotoComponent', () => {
  let component: UpdateCurrentPhotoComponent;
  let fixture: ComponentFixture<UpdateCurrentPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCurrentPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCurrentPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
