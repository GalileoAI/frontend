import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HavePlanFormComponent } from './have-plan-form.component';

describe('FormComponent', () => {
  let component: HavePlanFormComponent;
  let fixture: ComponentFixture<HavePlanFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HavePlanFormComponent]
    });
    fixture = TestBed.createComponent(HavePlanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
