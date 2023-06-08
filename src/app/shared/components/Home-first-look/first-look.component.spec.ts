import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLookComponent } from './first-look.component';

describe('FirstLookComponent', () => {
  let component: FirstLookComponent;
  let fixture: ComponentFixture<FirstLookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstLookComponent]
    });
    fixture = TestBed.createComponent(FirstLookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
