import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurpriseMeFormComponent } from './surprise-me-form.component';

describe('SurpriseMeFormComponent', () => {
  let component: SurpriseMeFormComponent;
  let fixture: ComponentFixture<SurpriseMeFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurpriseMeFormComponent]
    });
    fixture = TestBed.createComponent(SurpriseMeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
