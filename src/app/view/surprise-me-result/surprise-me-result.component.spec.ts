import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurpriseMeResultComponent } from './surprise-me-result.component';

describe('SurpriseMeResultComponent', () => {
  let component: SurpriseMeResultComponent;
  let fixture: ComponentFixture<SurpriseMeResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurpriseMeResultComponent]
    });
    fixture = TestBed.createComponent(SurpriseMeResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
