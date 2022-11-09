import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from '../../models/Customer';

@Component({
  selector: 'app-creation-page-customer',
  templateUrl: './creation-page-customer.component.html',
  styleUrls: ['./creation-page-customer.component.css']
})
export class CreationPageCustomerComponent implements OnInit {

  @Input() customer: Customer = new Customer();

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  createCustomer(customer: Customer) {
    this.customerService.createCustomer(customer).subscribe((data) => {alert("New Customer Created!"); this.ngOnInit()});
  }

}
