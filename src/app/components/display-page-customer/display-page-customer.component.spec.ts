import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPageCustomerComponent } from './display-page-customer.component';

describe('DisplayPageCustomerComponent', () => {
  let component: DisplayPageCustomerComponent;
  let fixture: ComponentFixture<DisplayPageCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayPageCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayPageCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
