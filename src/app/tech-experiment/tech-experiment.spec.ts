import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechExperiment } from './tech-experiment';

describe('TechExperiment', () => {
  let component: TechExperiment;
  let fixture: ComponentFixture<TechExperiment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechExperiment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechExperiment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
