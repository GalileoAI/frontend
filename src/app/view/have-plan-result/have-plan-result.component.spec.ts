import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HavePlanResultComponent } from './have-plan-result.component';

describe('ResultComponent', () => {
  let component: HavePlanResultComponent;
  let fixture: ComponentFixture<HavePlanResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HavePlanResultComponent]
    });
    fixture = TestBed.createComponent(HavePlanResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
