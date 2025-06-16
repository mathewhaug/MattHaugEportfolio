import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDevelopment } from './course-development';

describe('CourseDevelopment', () => {
  let component: CourseDevelopment;
  let fixture: ComponentFixture<CourseDevelopment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseDevelopment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseDevelopment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
