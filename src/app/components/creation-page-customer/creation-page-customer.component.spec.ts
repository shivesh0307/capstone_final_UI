import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationPageCustomerComponent } from './creation-page-customer.component';

describe('CreationPageCustomerComponent', () => {
  let component: CreationPageCustomerComponent;
  let fixture: ComponentFixture<CreationPageCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationPageCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationPageCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
