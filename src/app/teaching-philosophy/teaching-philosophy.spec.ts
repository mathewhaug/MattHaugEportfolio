import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingPhilosophy } from './teaching-philosophy';

describe('TeachingPhilosophy', () => {
  let component: TeachingPhilosophy;
  let fixture: ComponentFixture<TeachingPhilosophy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachingPhilosophy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachingPhilosophy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
