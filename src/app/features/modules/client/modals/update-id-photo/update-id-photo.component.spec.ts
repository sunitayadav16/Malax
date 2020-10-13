import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateIdPhotoComponent } from './update-id-photo.component';

describe('UpdateIdPhotoComponent', () => {
  let component: UpdateIdPhotoComponent;
  let fixture: ComponentFixture<UpdateIdPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateIdPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateIdPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
