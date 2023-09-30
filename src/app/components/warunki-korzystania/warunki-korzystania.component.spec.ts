import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarunkiKorzystaniaComponent } from './warunki-korzystania.component';

describe('WarunkiKorzystaniaComponent', () => {
  let component: WarunkiKorzystaniaComponent;
  let fixture: ComponentFixture<WarunkiKorzystaniaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WarunkiKorzystaniaComponent]
    });
    fixture = TestBed.createComponent(WarunkiKorzystaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
