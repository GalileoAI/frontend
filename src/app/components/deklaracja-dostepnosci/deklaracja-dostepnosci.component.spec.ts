import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeklaracjaDostepnosciComponent } from './deklaracja-dostepnosci.component';

describe('DeklaracjaDostepnosciComponent', () => {
  let component: DeklaracjaDostepnosciComponent;
  let fixture: ComponentFixture<DeklaracjaDostepnosciComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeklaracjaDostepnosciComponent]
    });
    fixture = TestBed.createComponent(DeklaracjaDostepnosciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
