import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GencountCreateComponent } from './gencount-create';

describe('GencountCreate', () => {
  let component: GencountCreateComponent;
  let fixture: ComponentFixture<GencountCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GencountCreateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GencountCreateComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
