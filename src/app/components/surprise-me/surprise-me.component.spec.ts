import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurpriseMeComponent } from './surprise-me.component';

describe('SurpriseMeComponent', () => {
  let component: SurpriseMeComponent;
  let fixture: ComponentFixture<SurpriseMeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurpriseMeComponent]
    });
    fixture = TestBed.createComponent(SurpriseMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
