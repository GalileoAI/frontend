import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HavePlanComponent } from './have-plan.component';

describe('MainComponent', () => {
  let component: HavePlanComponent;
  let fixture: ComponentFixture<HavePlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HavePlanComponent]
    });
    fixture = TestBed.createComponent(HavePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
