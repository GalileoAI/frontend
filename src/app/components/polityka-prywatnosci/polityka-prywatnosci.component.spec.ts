import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolitykaPrywatnosciComponent } from './polityka-prywatnosci.component';

describe('PolitykaPrywatnosciComponent', () => {
  let component: PolitykaPrywatnosciComponent;
  let fixture: ComponentFixture<PolitykaPrywatnosciComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolitykaPrywatnosciComponent]
    });
    fixture = TestBed.createComponent(PolitykaPrywatnosciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
