import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GencountDetail } from './gencount-detail';

describe('GencountDetail', () => {
  let component: GencountDetail;
  let fixture: ComponentFixture<GencountDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GencountDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(GencountDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
